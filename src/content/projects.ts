export type Project = {
  id:           string;
  title:        { es: string; en: string };
  description:  { es: string; en: string };
  tags:         string[];
  github?:      string;
  live?:        string;
  confidential: boolean;
};

export const projects: Project[] = [
  {
    id: 'bitly-script',
    title: {
      es: 'Automatización UTM → Bitly',
      en: 'UTM → Bitly Automation',
    },
    description: {
      es: 'Script que transforma automáticamente URLs con parámetros UTM en enlaces Bitly personalizados con dominio de cliente. Elimina el proceso manual y estandariza el tracking de campañas.',
      en: 'Script that automatically converts UTM-tagged URLs into custom branded Bitly links. Eliminates manual work and standardizes campaign tracking.',
    },
    tags: ['Google Apps Script', 'Bitly API', 'UTM', 'Automation'],
    github: 'https://github.com/andreiito/portafolio',
    confidential: false,
  },
  {
    id: 'certificate-system',
    title: {
      es: 'Sistema de certificados automatizados',
      en: 'Automated Certificate System',
    },
    description: {
      es: 'Generación y entrega automática de certificados personalizados a partir de envío de formulario. Conectado a flujo de email marketing.',
      en: 'Automatic generation and delivery of personalized certificates from form submissions, connected to an email marketing flow.',
    },
    tags: ['HTML', 'CSS', 'Google Apps Script', 'Email Automation'],
    confidential: false,
  },
  {
    id: 'real-estate',
    title: {
      es: 'Marketplace inmobiliario',
      en: 'Real Estate Marketplace',
    },
    description: {
      es: 'Plataforma web custom para listado y búsqueda de inmuebles, desarrollada con HTML, CSS y JavaScript usando Materialize como framework de UI.',
      en: 'Custom web platform for real estate listings and search, built with HTML, CSS, and JavaScript using Materialize as the UI framework.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Materialize'],
    confidential: false,
  },
  {
    id: 'telegram-bot',
    title: {
      es: 'Bot de Telegram para sesiones evergreen',
      en: 'Telegram Bot for Evergreen Sessions',
    },
    description: {
      es: 'Bot de recordatorio automático para estrategias de webinar evergreen. Enviaba el link y mensaje personalizado minutos antes de cada sesión.',
      en: 'Automated reminder bot for evergreen webinar strategies. Sent personalized links and messages minutes before each session.',
    },
    tags: ['Telegram API', 'Automation', 'Evergreen Strategy'],
    confidential: false,
  },
  {
    id: 'crm-migration',
    title: {
      es: 'Migración CRM a GoHighLevel',
      en: 'CRM Migration to GoHighLevel',
    },
    description: {
      es: 'Migración completa de múltiples clientes de Keap/ActiveCampaign a GoHighLevel, incluyendo segmentos, automatizaciones, templates de email y documentación del proceso.',
      en: 'Full migration of multiple clients from Keap/ActiveCampaign to GoHighLevel, including segments, automations, email templates, and full process documentation.',
    },
    tags: ['GoHighLevel', 'Keap', 'ActiveCampaign', 'CRM', 'Automation'],
    confidential: true,
  },
];
