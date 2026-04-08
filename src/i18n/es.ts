export const es = {
  nav: {
    about:      'Sobre mí',
    experience: 'Experiencia',
    skills:     'Habilidades',
    projects:   'Proyectos',
    languages:  'Idiomas',
    contact:    'Contacto',
  },
  hero: {
    title:    'Andre Ortiz Loyola Castañeda',
    role:     'MarTech · Full Stack Developer',
    tagline:  'Tecnología que conecta. Estrategia que convierte.',
    cta_work:    'Ver proyectos',
    cta_contact: 'Contactar',
  },
  about: {
    label:    'Sobre mí',
    title:    'El perfil',
    bio: 'Profesional de MarTech y desarrollo Full Stack basado en Mérida, México. Actualmente Lead Marketing Manager en Rentamira, diseñando sistemas de marketing operados con IA para clientes de renta vacacional. Antes lideró el área web y de automatización en una de las agencias top de LATAM durante 4 años. Aprende tecnología nueva construyendo algo con ella. También habla ocho idiomas, lo que dice algo sobre cómo piensa.',
    location: 'Mérida, Yucatán · México',
    languages_label: 'Idiomas',
  },
  experience: {
    label:   'Experiencia',
    title:   'Trayectoria',
    present: 'Presente',
    own_projects: 'Proyectos propios dentro del rol',
  },
  skills: {
    label: 'Habilidades',
    title: 'Stack',
  },
  projects: {
    label:       'Proyectos',
    title:       'Trabajo',
    confidential: 'Proyecto confidencial',
    view_code:   'Ver código',
    view_live:   'Ver sitio',
  },
  languages: {
    label: 'Idiomas',
    title: 'Idiomas',
  },
  contact: {
    label:       'Contacto',
    title:       'Hablemos',
    description: 'Disponible para proyectos freelance, colaboraciones y posiciones fulltime.',
    email_label: 'Email',
    cta:         'Enviar mensaje',
    side_project: 'Side project',
  },
  footer: {
    made: 'Hecho con curiosidad y café.',
  },
} as const;

export type Translations = typeof es;
