import { CONTACT } from '../config/site';
export const whatsappHref = (text = '') =>
  CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';
