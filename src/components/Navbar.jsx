import React from 'react';

const Navbar = () => {
  const brandColor = '#036F3E';
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg" style={{ background: brandColor }} />
          <span className="text-2xl font-black tracking-tight" style={{ color: brandColor }}>TechKnots</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#tracks" className="text-emerald-900 hover:text-emerald-700 transition">Domains</a>
          <a href="#features" className="text-emerald-900 hover:text-emerald-700 transition">Why TechKnots</a>
          <a href="#auth" className="text-emerald-900 hover:text-emerald-700 transition">Join</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#auth" className="px-4 py-2 rounded-lg border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition">Log in</a>
          <a href="#auth" className="px-4 py-2 rounded-lg text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition" style={{ background: brandColor }}>Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
