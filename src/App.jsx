import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Features from './components/Features';
import Auth from './components/Auth';

const App = () => {
  return (
    <div className="font-inter text-emerald-900 bg-white">
      <Navbar />
      <Hero />
      <Tracks />
      <Features />
      <Auth />
      <footer className="border-t border-emerald-100">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-800/70">© {new Date().getFullYear()} TechKnots — Built for the future of learning.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
