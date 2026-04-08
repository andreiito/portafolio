export type SkillCategory = {
  name: { es: string; en: string };
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: { es: 'Marketing Technology', en: 'Marketing Technology' },
    skills: [
      'GoHighLevel', 'Keap', 'ActiveCampaign', 'Kajabi',
      'ClickFunnels', 'Leadpages', 'Unbounce', 'WordPress',
      'Hotmart', 'Teachable', 'Mighty Networks',
      'Amazon SES', 'Google Analytics', 'Google Tag Manager',
      'Google Optimize', 'Clarity', 'Zapier',
      'JoinZapp', 'URLGenius', 'Bitly', 'ManyChat',
      'Stripe', 'Typeform', 'Calendly',
    ],
  },
  {
    name: { es: 'Desarrollo', en: 'Development' },
    skills: [
      'HTML', 'CSS', 'JavaScript', 'Java',
      'PostgreSQL', 'Google Apps Script',
      'APIs REST', 'Webhooks', 'Materialize',
      'JWPlayer', 'Vturb',
    ],
  },
  {
    name: { es: 'Proceso & Comunicación', en: 'Process & Communication' },
    skills: [
      'Documentación técnica',
      'Liderazgo de equipos',
      'Reporte estratégico',
      'Onboarding',
      'Manuales de operación',
      'Metodologías ágiles',
    ],
  },
];
