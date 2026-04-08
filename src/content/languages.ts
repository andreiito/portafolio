export type Language = {
  name:  { es: string; en: string };
  level: { es: string; en: string };
  note?: string;
  bars:  number; // 1-5
};

export const languages: Language[] = [
  {
    name:  { es: 'Español',              en: 'Spanish' },
    level: { es: 'Nativo',               en: 'Native' },
    bars: 5,
  },
  {
    name:  { es: 'Inglés',               en: 'English' },
    level: { es: 'Avanzado (C1)',         en: 'Advanced (C1)' },
    bars: 4,
  },
  {
    name:  { es: 'Chino Mandarín',       en: 'Mandarin Chinese' },
    level: { es: 'Intermedio (HSK4)',     en: 'Intermediate (HSK4)' },
    bars: 3,
  },
  {
    name:  { es: 'Lengua de Señas Mexicana', en: 'Mexican Sign Language' },
    level: { es: 'Intermedio',            en: 'Intermediate' },
    bars: 3,
  },
  {
    name:  { es: 'Italiano',             en: 'Italian' },
    level: { es: 'Básico',               en: 'Basic' },
    bars: 1,
  },
  {
    name:  { es: 'Francés',              en: 'French' },
    level: { es: 'Básico',               en: 'Basic' },
    bars: 1,
  },
  {
    name:  { es: 'Japonés',              en: 'Japanese' },
    level: { es: 'Básico',               en: 'Basic' },
    bars: 1,
  },
  {
    name:  { es: 'Náhuatl',              en: 'Nahuatl' },
    level: { es: 'Básico',               en: 'Basic' },
    bars: 1,
  },
];
