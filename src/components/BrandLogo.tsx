import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const emblemSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] md:text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
  };

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="The Apple IN - Return to Homepage"
    >
      {/* Official Extracted Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/images/apple-in-emblem.png"
          alt="The Apple IN Brand Emblem"
          className={`${emblemSizes[size]} object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center text-left leading-none">
        <div className={`font-display font-extrabold tracking-tight ${titleSizes[size]} flex items-center gap-1`}>
          <span className={isLight ? 'text-white' : 'text-brand-dark'}>
            THE APPLE
          </span>
          <span className="text-brand-orange font-black">
            IN
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1 mt-1">
            <span
              className={`font-semibold uppercase ${subSizes[size]} ${
                isLight ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              LODGE • INTERNET • CCTV
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
