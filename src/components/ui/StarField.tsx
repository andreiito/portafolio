import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function StarField() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="starfield"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: { color: { value: 'transparent' } },
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
            density: { enable: true, width: 1920, height: 1080 },
          },
          color: { value: ['#ffffff', '#a0becc', '#d79f21'] },
          opacity: {
            value: { min: 0.1, max: 0.7 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 2.5 },
          },
          move: {
            enable: true,
            speed: 0.15,
            direction: 'none',
            random: true,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            distance: 130,
            color: '#45819c',
            opacity: 0.12,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 150,
              links: { opacity: 0.3 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
