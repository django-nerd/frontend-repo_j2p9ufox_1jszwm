import React from 'react';
import { Trophy, School, Layers3, Rocket } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-emerald-200 bg-white p-6">
    <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white grid place-items-center">
      <Icon size={20} />
    </div>
    <div className="mt-4 text-lg font-semibold text-emerald-900">{title}</div>
    <p className="mt-2 text-sm text-emerald-800/80">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-900">Built for creators and builders</h2>
            <p className="mt-4 text-emerald-800/80">
              Learn by doing with interactive labs, hardware‑ready guides, and expert feedback. Earn industry‑recognized certificates as you progress.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-emerald-800/80 list-disc list-inside">
              <li>Studio‑grade visuals and concept explainers</li>
              <li>Guided projects and capstones for each track</li>
              <li>Assessments, leaderboards, and community</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Feature icon={Rocket} title="Project‑first" desc="Every module ends with a real build you can demo." />
            <Feature icon={Layers3} title="Modular" desc="Short, focused lessons you can stack into skills." />
            <Feature icon={School} title="Mentored" desc="Office hours with industry experts and TAs." />
            <Feature icon={Trophy} title="Certified" desc="Badges and certificates on completion." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
