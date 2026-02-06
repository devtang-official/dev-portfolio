'use client';

import FloatingAppleLogo from '../atoms/FloatingAppleLogo';

export default function BackgroundAnimation() {
  // 랜덤 위치와 애니메이션 속성을 가진 애플 로고들
  const logos = [
    { id: 1, x: 10, y: 10, size: 40, delay: 0, duration: 20 },
    { id: 2, x: 80, y: 20, size: 30, delay: 2, duration: 25 },
    { id: 3, x: 20, y: 60, size: 50, delay: 4, duration: 22 },
    { id: 4, x: 70, y: 70, size: 35, delay: 1, duration: 23 },
    { id: 5, x: 50, y: 30, size: 45, delay: 3, duration: 21 },
    { id: 6, x: 90, y: 50, size: 40, delay: 5, duration: 24 },
    { id: 7, x: 15, y: 80, size: 30, delay: 2.5, duration: 26 },
    { id: 8, x: 60, y: 15, size: 35, delay: 4.5, duration: 20 },
    { id: 9, x: 40, y: 85, size: 50, delay: 1.5, duration: 23 },
    { id: 10, x: 85, y: 85, size: 40, delay: 3.5, duration: 22 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {logos.map((logo) => (
        <FloatingAppleLogo
          key={logo.id}
          x={logo.x}
          y={logo.y}
          size={logo.size}
          delay={logo.delay}
          duration={logo.duration}
        />
      ))}
    </div>
  );
}
