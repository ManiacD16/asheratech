import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Asheraatech - Digital Product & Engineering Agency',
    short_name: 'Asheraatech',
    description: 'Compile complexity into progress.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0b4d',
    theme_color: '#0f0b4d',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
