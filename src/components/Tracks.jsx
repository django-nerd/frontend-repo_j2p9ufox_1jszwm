import React from 'react';
import { Cpu, CpuGauge, Brain, CircuitBoard, Database, Bot, Wifi } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, accent }) => (
  <div className="group rounded-2xl border border-emerald-200 bg-white p-6 hover:shadow-xl hover:shadow-emerald-600/10 transition relative overflow-hidden">
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: accent }} />
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl grid place-items-center text-white" style={{ background: accent }}>
        <Icon size={20} />
      </div>
      <div className="text-lg font-semibold text-emerald-900">{title}</div>
    </div>
    <p className="mt-3 text-sm text-emerald-800/80">{desc}</p>
  </div>
);

const Tracks = () => {
  const items = [
    { icon: Brain, title: 'Artificial Intelligence', desc: 'LLMs, agents, prompt engineering, RAG, MLOps, and deployment.', accent: '#5B21B6' },
    { icon: Wifi, title: 'Internet of Things', desc: 'Edge devices, MQTT, cloud ingestion, digital twins, realtime dashboards.', accent: '#0EA5E9' },
    { icon: Database, title: 'Data Science', desc: 'Python, statistics, feature engineering, model training and evaluation.', accent: '#F59E0B' },
    { icon: Bot, title: 'Robotics', desc: 'ROS/ROS2, SLAM, control systems, path planning, and simulation.', accent: '#10B981' },
    { icon: CircuitBoard, title: 'Hardware & Electronics', desc: 'Microcontrollers, PCB design, sensors/actuators, power and signal.', accent: '#EF4444' },
    { icon: Cpu, title: 'Emerging Tech', desc: 'AR/VR, edge AI, quantum basics, safety, and ethics of automation.', accent: '#8B5CF6' },
  ];

  return (
    <section id="tracks" className="relative py-20 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-900">Choose your track</h2>
          <p className="mt-3 text-emerald-800/80">
            Structured paths curated by experts. Build portfolio‑ready projects across the most in‑demand technologies.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
