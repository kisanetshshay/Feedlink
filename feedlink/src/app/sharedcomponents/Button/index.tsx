'use client';

import { ReactNode } from 'react';

export default function Button({
  children,
  variant = 'primary',
  onClick,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) {
  const base = 'px-6 py-2.5 rounded-full font-semibold text-base xs:text-lg min-w-[200px] shadow transition-colors duration-300';

  const styles =
    variant === 'primary'
      ? 'bg-orange-400 text-white hover:bg-orange-500 border-transparent'
      : 'bg-white text-orange-500 border-2 border-orange-400 hover:bg-orange-50 hover:border-orange-500';

  return (
    <button
      className={`${base} ${styles}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}