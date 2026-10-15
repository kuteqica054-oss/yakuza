<?php
// Generated at build time from src/pages/teklif.php.ts — edit there, not here.
$RECIPIENT = "";
$FROM = 'noreply@yakuzablade.com.tr';
$BRAND = "Yakuza Blade";
$THANKS = ['tr' => '/tesekkurler/', 'en' => '/en/thank-you/'];

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
function done($code, $ok, $lang, $thanks, $json) {
  if ($json) { http_response_code($code); header('Content-Type: application/json'); echo json_encode(['ok' => $ok]); exit; }
  if ($ok) { header('Location: ' . $thanks[$lang], true, 303); exit; }
  http_response_code($code); echo 'Error'; exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); exit; }

$f = fn($k, $max = 500) => trim(mb_substr(str_replace(["\r", "\n"], ' ', (string)($_POST[$k] ?? '')), 0, $max));
$lang = $f('site_language') === 'en' ? 'en' : 'tr';
if ($f('bot-field') !== '') done(200, true, $lang, $THANKS, $wantsJson); // honeypot: pretend success

$data = [
  'date' => date('c'), 'lang' => $lang, 'name' => $f('name'), 'company' => $f('company'), 'position' => $f('position'),
  'phone' => $f('phone'), 'email' => $f('email'), 'country' => $f('country'), 'city' => $f('city'),
  'venue_type' => $f('venue_type'), 'area_m2' => $f('area_m2'), 'planned_opening' => $f('planned_opening'),
  'interest' => $f('interest'), 'consent' => $f('consent'),
  'message' => trim(mb_substr((string)($_POST['message'] ?? ''), 0, 5000)),
];
if (mb_strlen($data['name']) < 2 || $data['company'] === '' || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)
    || strlen(preg_replace('/\D/', '', $data['phone'])) < 7 || $data['venue_type'] === '' || $data['consent'] !== 'yes') {
  done(422, false, $lang, $THANKS, $wantsJson);
}

$logged = false;
$csv = dirname(__DIR__) . '/teklifler.csv';
if ($fh = @fopen($csv, 'a')) {
  if (flock($fh, LOCK_EX)) {
    if (filesize($csv) === 0) fputcsv($fh, array_keys($data));
    fputcsv($fh, array_values($data));
    flock($fh, LOCK_UN); $logged = true;
  }
  fclose($fh);
}

$mailed = false;
if ($RECIPIENT !== '') {
  $body = '';
  foreach ($data as $k => $v) $body .= str_pad($k, 16) . ": $v\n";
  $subject = '=?UTF-8?B?' . base64_encode("[$BRAND] Teklif talebi: {$data['company']}") . '?=';
  $headers = "From: $BRAND <$FROM>\r\nReply-To: {$data['email']}\r\nContent-Type: text/plain; charset=UTF-8\r\n";
  $mailed = @mail($RECIPIENT, $subject, $body, $headers);
}

done(($logged || $mailed) ? 200 : 500, $logged || $mailed, $lang, $THANKS, $wantsJson);
