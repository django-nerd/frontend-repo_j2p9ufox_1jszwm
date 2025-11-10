import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const primary = '#036F3E';
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient to blend with brand */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/65 to-white"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">AI • IoT • Data Science • Robotics • Hardware</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-emerald-900">
            Learn Emerging Tech with <span style={{ color: primary }}>TechKnots</span>
          </h1>
          <p className="mt-5 text-emerald-800/80 text-lg leading-relaxed">
            A modern LMS crafted for innovators. Master AI agents, edge IoT, ML pipelines, robotic systems, and electronics with immersive hands‑on paths.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#auth" className="px-5 py-3 rounded-xl text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition" style={{ background: primary }}>Start learning</a>
            <a href="#tracks" className="px-5 py-3 rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition">Explore domains</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: 'AI', v: 'Agentic, LLMs' },
              { k: 'IoT', v: 'Edge & Cloud' },
              { k: 'Robotics', v: 'ROS, Control' },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur p-4">
                <div className="text-sm font-semibold text-emerald-900">{item.k}</div>
                <div className="text-xs text-emerald-800/70">{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-white blur-2xl opacity-70" />
          <div className="relative rounded-3xl border border-emerald-200 bg-white/80 backdrop-blur p-6">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
              alt="AI & Robotics"
              className="rounded-xl object-cover w-full h-72"
            />
            <div className="mt-4 text-sm text-emerald-800/80">
              Build projects like voice agents, sensor networks, and embedded systems through guided, studio‑grade courses.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
