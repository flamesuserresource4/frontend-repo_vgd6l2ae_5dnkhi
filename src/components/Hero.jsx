import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-gradient-to-b from-rose-50 via-indigo-50 to-white">
      {/* Spline background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient wash so text is legible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-500" />
          Bank‑grade security • PCI‑ready
        </div>
        <h1 className="font-semibold tracking-tight text-slate-900 text-4xl md:text-6xl leading-tight">
          The pastel‑clean way to launch your modern fintech SaaS
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 text-lg">
          Issue virtual cards, accept payments, and manage subscriptions with a minimalist, delightful experience.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            <Rocket className="h-5 w-5" />
            Get started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-slate-700 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            <CreditCard className="h-5 w-5 text-rose-500" />
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
