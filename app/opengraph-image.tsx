import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Asheratech — Compile complexity into progress';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: '#162136',
        color: '#ffffff',
        padding: '72px 76px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: 999,
          background: '#00e05c',
          filter: 'blur(130px)',
          opacity: 0.16,
          right: -80,
          top: -80,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 15,
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#162136',
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>
            Ashera<span style={{ color: '#00e05c' }}>tech</span>
          </div>
        </div>
        <div
          style={{
            maxWidth: 930,
            fontSize: 74,
            lineHeight: 0.99,
            letterSpacing: '-0.055em',
            fontWeight: 700,
          }}
        >
          Compile complexity into{' '}
          <span style={{ color: '#00e05c' }}>progress.</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.62)',
            fontSize: 20,
          }}
        >
          <span>Digital product & engineering agency</span>
          <span>Strategy · Experience · Engineering</span>
        </div>
      </div>
    </div>,
    size,
  );
}
