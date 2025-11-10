import React, { useState } from 'react';
import { UserPlus, LogIn } from 'lucide-react';

const brand = '#036F3E';

const Input = ({ label, type = 'text', placeholder }) => (
  <label className="block">
    <span className="text-sm font-medium text-emerald-900">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1 w-full rounded-xl border border-emerald-200 bg-white/80 focus:bg-white px-4 py-3 outline-none focus:ring-4 ring-emerald-100"
    />
  </label>
);

const Auth = () => {
  const [mode, setMode] = useState('signup');

  return (
    <section id="auth" className="relative py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-emerald-900">Join TechKnots</h3>
            <p className="mt-3 text-emerald-800/80">Sign up to start your journey across AI, IoT, Data Science, Robotics and Electronics.</p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => setMode('signup')} className={`px-4 py-2 rounded-lg text-white ${mode==='signup' ? '' : 'opacity-70'}`} style={{ background: brand }}>
                <span className="inline-flex items-center gap-2"><UserPlus size={16} /> Sign up</span>
              </button>
              <button onClick={() => setMode('login')} className={`px-4 py-2 rounded-lg border border-emerald-200 text-emerald-800 bg-white ${mode==='login' ? '' : 'opacity-70'}`}>
                <span className="inline-flex items-center gap-2"><LogIn size={16} /> Log in</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-white blur-2xl opacity-70" />
            <div className="relative rounded-3xl border border-emerald-200 bg-white/80 backdrop-blur p-6">
              {mode === 'signup' ? (
                <form className="space-y-4">
                  <Input label="Full name" placeholder="Ada Lovelace" />
                  <Input label="Email" type="email" placeholder="ada@techknots.io" />
                  <Input label="Password" type="password" placeholder="••••••••" />
                  <button type="button" className="w-full py-3 rounded-xl text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition" style={{ background: brand }}>Create account</button>
                  <p className="text-xs text-emerald-800/70 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
                </form>
              ) : (
                <form className="space-y-4">
                  <Input label="Email" type="email" placeholder="you@techknots.io" />
                  <Input label="Password" type="password" placeholder="••••••••" />
                  <button type="button" className="w-full py-3 rounded-xl text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition" style={{ background: brand }}>Log in</button>
                  <p className="text-xs text-emerald-800/70 text-center">Forgot your password? Reset it</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
