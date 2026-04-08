import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Detect current lang from URL
    const isEn = window.location.pathname.startsWith('/en');
    setLang(isEn ? 'en' : 'es');
  }, []);

  const toggle = () => {
    if (lang === 'es') {
      window.location.href = '/en';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md
                 border border-mid/30 text-mist text-xs font-mono font-medium
                 hover:border-stellar hover:text-stellar transition-all duration-200"
    >
      <span className={lang === 'es' ? 'text-stellar' : 'text-mist/50'}>ES</span>
      <span className="text-mid/50">/</span>
      <span className={lang === 'en' ? 'text-stellar' : 'text-mist/50'}>EN</span>
    </button>
  );
}
