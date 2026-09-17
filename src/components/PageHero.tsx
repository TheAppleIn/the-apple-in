import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  currentPage: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
  currentPage,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-dark overflow-hidden text-white">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Multi-layered cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-500" />
          <span className="text-brand-orange font-medium">{currentPage}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-orange bg-neutral-900/90 border border-neutral-700/80 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>{badge}</span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white max-w-3xl leading-[1.15]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
