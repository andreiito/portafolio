export type ExperienceItem = {
  company:    string;
  role:       { es: string; en: string };
  period:     { es: string; en: string };
  badge?:     string;
  bullets:    { es: string; en: string }[];
  ownProjects?: { es: string; en: string }[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Rentamira',
    role: {
      es: 'Lead Marketing Manager',
      en: 'Lead Marketing Manager',
    },
    period: {
      es: 'Marzo 2026 – Presente · Presencial · Mérida',
      en: 'March 2026 – Present · On-site · Mérida',
    },
    bullets: [
      {
        es: 'Lidera la estrategia de marketing para clientes de gestión de renta vacacional: SEO, CRO, paid media, redes sociales y lifecycle marketing.',
        en: 'Leads marketing strategy for vacation rental management clients across SEO, CRO, paid media, social media, and lifecycle marketing.',
      },
      {
        es: 'Diseña sistemas de operación asistidos por IA para automatizar investigación, producción creativa, testing y reportes de campaña.',
        en: 'Designs AI-driven operational systems to automate campaign research, creative production, testing frameworks, and reporting.',
      },
      {
        es: 'Gestiona y optimiza campañas de pago en Google Ads y Meta orientadas a performance y conversión.',
        en: 'Manages and optimizes paid campaigns across Google Ads and Meta with a performance and conversion focus.',
      },
      {
        es: 'Construye y optimiza flujos de email marketing y lifecycle: segmentación, automatización, retención y reactivación.',
        en: 'Builds and optimizes email marketing and lifecycle flows: segmentation, automation, retention, and reactivation.',
      },
      {
        es: 'Lidera iniciativas de CRO en landing pages y funnels de reservación para múltiples clientes simultáneos.',
        en: 'Leads CRO initiatives across landing pages and booking funnels for multiple simultaneous client accounts.',
      },
      {
        es: 'Estandariza procesos para reducir ejecución manual y aumentar velocidad, consistencia y escalabilidad.',
        en: 'Standardizes processes to reduce manual execution and increase speed, consistency, and scalability.',
      },
    ],
  },
  {
    company: 'Lancemos Marketing Digital',
    role: {
      es: 'Web Manager → Marketing Technology Specialist',
      en: 'Web Manager → Marketing Technology Specialist',
    },
    period: {
      es: '2021 – Marzo 2026 · Remoto',
      en: '2021 – March 2026 · Remote',
    },
    badge: 'Top 15 LATAM · Hotmart',
    bullets: [
      {
        es: 'Lideró el área web y coordinó un equipo de 2 personas en automatizaciones, integraciones y gestión estratégica de leads.',
        en: 'Led the web department and coordinated a team of 2 in automations, integrations, and strategic lead management.',
      },
      {
        es: 'Arquitectura e implementación de funnels para lanzamientos tipo Product Launch Formula, evergreen y estrategias híbridas.',
        en: 'Architected and implemented funnels for Product Launch Formula, evergreen, and hybrid launch strategies.',
      },
      {
        es: 'Gestión y migración de múltiples CRMs: Keap → ActiveCampaign → GoHighLevel, con todos los clientes activos.',
        en: 'Managed and migrated multiple CRMs: Keap → ActiveCampaign → GoHighLevel, across all active clients.',
      },
      {
        es: 'Desarrollo de integraciones y automatizaciones avanzadas vía APIs, Zapier y Google Apps Script.',
        en: 'Developed advanced integrations and automations via APIs, Zapier, and Google Apps Script.',
      },
      {
        es: 'Administración de plataformas de cursos (Hotmart, Teachable, Kajabi, Mighty Networks) y pasarelas de pago (Stripe, Hotmart).',
        en: 'Managed e-learning platforms (Hotmart, Teachable, Kajabi, Mighty Networks) and payment gateways (Stripe, Hotmart).',
      },
      {
        es: 'Elaboración de reportes de rendimiento: mailing, comportamiento web y analítica avanzada (GA, Clarity, Optimize).',
        en: 'Produced performance reports: email metrics, web behavior, and advanced analytics (GA, Clarity, Optimize).',
      },
      {
        es: 'Documentación técnica de procesos, flujos de trabajo y manuales de operación para el equipo.',
        en: 'Created technical documentation, process flows, and operational manuals for the team.',
      },
    ],
    ownProjects: [
      {
        es: 'Bot de Telegram para recordatorios automatizados de sesiones evergreen.',
        en: 'Telegram bot for automated evergreen session reminders.',
      },
      {
        es: 'Script de transformación automática de URLs con UTM a Bitly personalizado con dominio de cliente.',
        en: 'Script that auto-converts UTM-tagged URLs into custom branded Bitly links.',
      },
      {
        es: 'Sistema de generación y envío de certificados personalizados desde formulario.',
        en: 'Automated system for generating and delivering personalized certificates from form submissions.',
      },
      {
        es: 'Marketplace inmobiliario custom desarrollado con HTML, CSS y JavaScript (Materialize).',
        en: 'Custom real estate marketplace built with HTML, CSS, and JavaScript (Materialize).',
      },
      {
        es: 'Reparación y rediseño de página de numerología conectada a CRM y flujo de automatización.',
        en: 'Rebuilt a numerology page with full CRM connection and automation flow.',
      },
      {
        es: 'Reportes automáticos en Google Sheets conectados a fuentes de datos externas.',
        en: 'Automated Google Sheets reports connected to external data sources.',
      },
    ],
  },
  {
    company: 'Facultad de Derecho · UNAM',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    period: {
      es: '2019 – 2021',
      en: '2019 – 2021',
    },
    bullets: [
      {
        es: 'Mantenimiento y administración de bases de datos relacionales (PostgreSQL).',
        en: 'Maintained and administered relational databases (PostgreSQL).',
      },
      {
        es: 'Migración de aplicaciones internas de Visual Basic a Java para mejorar escalabilidad.',
        en: 'Migrated internal applications from Visual Basic to Java for improved scalability.',
      },
      {
        es: 'Desarrollo de sistema web para gestión de almacén y exámenes en línea.',
        en: 'Built web systems for warehouse management and online exam administration.',
      },
      {
        es: 'Soporte técnico, documentación de procesos y atención a docentes y estudiantes.',
        en: 'Provided technical support, process documentation, and user assistance to faculty and students.',
      },
    ],
  },
];
