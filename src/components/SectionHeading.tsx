import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          dark
            ? 'bg-neutral-800 text-brand-orange border border-neutral-700'
            : 'bg-brand-orange-light text-brand-orange border border-orange-200/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display ${
          dark ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
