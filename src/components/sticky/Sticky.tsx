'use client';

interface StickyProps {
  children: React.ReactNode;
  top?: string; // Sticky 위치를 설정할 수 있는 옵션
}

export const Sticky: React.FC<StickyProps> = ({ children, top = '0px' }) => {
  return (
    <div
      className="sticky"
      style={{
        position: 'sticky',
        top: top,
        zIndex: 10, // Optional: 다른 요소 위에 위치하도록 설정
      }}
    >
      {children}
    </div>
  );
};
