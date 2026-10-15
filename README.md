# Сайт: детские лазертаг-арены под ключ

Astro 5 + Tailwind CSS 4, полностью статическая сборка. Два языка: турецкий (основной, `/`) и английский (`/en/`).
Все иллюстрации — SVG/CSS в коде, без фото и внешних картинок.

## Быстрый старт

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # статическая сборка в dist/
npm run preview   # просмотр собранного сайта
```

Нужен Node 18.20+ (рекомендуется 22).

## Деплой

**Hostinger (текущая цель, yakuzablade.com.tr):** `npm run build`, затем загрузите *содержимое* `dist/` (включая скрытый `.htaccess`) в `domains/yakuzablade.com.tr/public_html`. `.htaccess` включает HTTPS-редирект на домен без www, 404-страницу, кэш и сжатие.

**Netlify:** подключите репозиторий, настройки подтянутся из `netlify.toml` (build: `npm run build`, publish: `dist`).
Netlify Forms включаются автоматически: форма помечена `data-netlify="true"`. Заявки появятся в Netlify → Forms → `teklif`.
Там же настройте email-уведомления.

**Vercel:** импортируйте репозиторий, фреймворк Astro определится сам (`vercel.json` уже есть).
Netlify Forms на Vercel не работают — переключите форму на Formspree (см. ниже).

После деплоя обязательно пропишите домен в `SITE_URL` (`src/config/site.ts`), иначе canonical, hreflang, sitemap и OG-картинки будут указывать на `example.com`.

## Где что менять

| Что | Где |
|---|---|
| Название бренда, юр. название, вордмарк логотипа | `src/config/site.ts` → `BRAND` |
| Домен | `src/config/site.ts` → `SITE_URL` |
| Контакты, WhatsApp, реквизиты (vergi no, MERSİS, KEP) | `src/config/site.ts` → `CONTACT` |
| Соцсети | `src/config/site.ts` → `SOCIAL` |
| Возраст игроков | `src/config/site.ts` → `AGE_RANGE` |
| Отправка формы | `src/config/site.ts` → `FORM` |
| Коэффициенты калькулятора | `src/config/site.ts` → `CALC` |
| Цвета и шрифты (дизайн-токены) | `src/styles/global.css` → блок `@theme` |
| Тексты TR | `src/i18n/tr.ts` |
| Тексты EN | `src/i18n/en.ts` |
| URL-адреса страниц (слаги) | `src/i18n/routes.ts` |
| Иллюстрации | `src/components/art/*.astro` |
| Секции главной | `src/components/sections/*.astro`, порядок — `src/views/HomeView.astro` |

### Название бренда
Меняется в одном месте — `BRAND` в `src/config/site.ts`. Оно используется в логотипе, `<title>`, OG-картинках,
schema.org и футере. `wordmark` — две строки логотипа, пишите их сразу заглавными (CSS `uppercase` на сайте не используется
из-за турецкой i/İ). Иконка логотипа — `src/components/ui/Logo.astro` и `public/favicon.svg`; PNG-фавиконы
(`favicon-32.png`, `apple-touch-icon.png`, `icon-192/512.png`) генерируются из `favicon.svg` при сборке.

### Цвета
Все цвета — токены в `@theme` (`src/styles/global.css`): `night-*` (тёмно-синяя «арена»), `paper*` и `ink` (светлые
бизнес-секции), командные `coral`, `cyan`, `sun` и их `-soft` (фоны) / `-ink` (версии для текста на светлом фоне,
проходят контраст AA). Измените значение — обновится весь сайт. Внутри SVG-иллюстраций те же HEX-значения заданы
константами в начале каждого файла в `src/components/art/`.

### Тексты
`src/i18n/tr.ts` — эталон структуры; `en.ts` типизирован по нему, поэтому если добавить ключ в одном языке и забыть
в другом, TypeScript подсветит ошибку (`npx astro check`). Любой фрагмент текста, начинающийся с `TODO`, автоматически
подсвечивается на сайте жёлтой плашкой — так ни одна заглушка не потеряется.

### Форма заявки
- `FORM.provider = 'php'` — **текущий режим, для Hostinger**: обработчик `/teklif.php` (генерируется из `src/pages/teklif.php.ts`) пишет каждую заявку в `teklifler.csv` на уровень выше `public_html` (снаружи недоступен) и, если задан `FORM.phpRecipient`, отправляет письмо.
- `FORM.provider = 'netlify'` — Netlify Forms (по умолчанию).
- `FORM.provider = 'formspree'` + `FORM.formspreeEndpoint = 'https://formspree.io/f/xxxxxx'` — для Vercel или любого хостинга.

С JS форма отправляется через `fetch` и показывает экран «спасибо» на языке страницы. Без JS — обычный POST и редирект
на `/tesekkurler/` или `/en/thank-you/`. В каждую заявку уходит скрытое поле `site_language` (`tr`/`en`).
Есть honeypot-поле против ботов.

### Калькулятор для инвестора
`CALC` в `src/config/site.ts`:
- `m2PerPlayer` — м² на одного одновременного игрока;
- `maxPlayers` — максимум игроков в одной игре;
- `slotMinutes` — длина одного сеанса с брифингом;
- `daysPerMonth` — рабочих дней в месяце;
- `area`, `hours`, `occupancy`, `price.tr` (₺), `price.en` (€) — границы и значения слайдеров.

Формула (`src/lib/calc.ts`): `игроков = min(maxPlayers, площадь / m2PerPlayer)`,
`сеансов в день = часы × 60 / slotMinutes`, `выручка в месяц = игроки × сеансы × загрузка × цена × daysPerMonth`.
Валюта и формат чисел подстраиваются под язык. Под калькулятором стоит дисклеймер.

### Как добавить фото
Используйте компонент `PhotoSlot` (`src/components/ui/PhotoSlot.astro`); пустые слоты уже стоят на страницах
«Под ключ», «Оборудование», «Автоматы», «О компании» (ищите комментарии `<!-- PHOTO: ... -->`).
1. Положите файл в `src/assets/photos/` (JPG/WEBP; широкие слоты — от 1600×1000, квадратные — от 1200×1200; до ~400 КБ).
2. `import arena1 from '../assets/photos/arena-1.jpg';`
3. `<PhotoSlot src={arena1} alt="..." label="..." />` — Astro сам сделает адаптивные и сжатые версии.

Фото с детьми — только с письменного согласия родителей (KVKK / GDPR).

### Изменить оборудование, темы, FAQ
Всё — массивы в `tr.ts` / `en.ts` (`equipment.items`, `themes.items`, `faq.items`). Иллюстрация подбирается по `id`
(`EquipmentArt` / `ThemeArt`). Для новой темы добавьте блок с её `id` в `ThemeArt.astro` и палитру в `src/lib/themes.ts`.

## SEO и техника
- `lang="tr"` / `lang="en"`, hreflang tr/en + x-default на каждой странице; переключатель TR/EN ведёт на ту же страницу.
- Свои title/description для каждой страницы и языка (`meta.pages` в словарях).
- Open Graph + Twitter Card, OG-картинки 1200×630 для каждого языка (`/og/tr.png`, `/og/en.png`) рендерятся при сборке через satori + resvg (`src/lib/og.ts`).
- schema.org `Organization` на всех страницах, `FAQPage` на главной и в контактах (ответы, состоящие только из TODO, в разметку не попадают).
- `sitemap.xml` с обеими версиями и xhtml:link-альтернативами, `robots.txt`, `site.webmanifest`.
- Юридические страницы и «спасибо» помечены `noindex`.
- JS только там, где нужен: мобильное меню, слайдер тем, вкладки оборудования, калькулятор, форма, появление при скролле. FAQ — нативный `<details>`.
- Все анимации на CSS и отключаются при `prefers-reduced-motion`.
- Проверено: Lighthouse (mobile) — Performance 96–97, Accessibility 100, Best Practices 100, SEO 100; нет горизонтального скролла на 375 px.

## Структура
```
src/
  config/site.ts        бренд, контакты, форма, калькулятор
  i18n/                 словари tr.ts / en.ts, маршруты, форматирование
  styles/global.css     дизайн-токены и базовые стили
  layouts/BaseLayout    <head>, SEO, header/footer
  views/                страницы (общие для двух языков)
  pages/                тонкие файлы-маршруты TR и EN + эндпоинты (og, sitemap, robots, иконки)
  components/
    art/                SVG-иллюстрации (арена, оборудование, темы, план)
    sections/           секции страниц
    ui/                 кнопки, табло, панель управления, таблицы, фото-слот
```

## Список TODO
См. `TODO.md` или выполните `grep -rn TODO src`.
