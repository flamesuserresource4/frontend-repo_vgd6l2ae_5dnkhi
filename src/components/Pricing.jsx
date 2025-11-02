import React from 'react';
import { Check, Shield, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    subtitle: 'For early experiments',
    features: ['Up to 100 test cards', 'Sandbox API access', 'Basic analytics'],
    cta: 'Start free',
    accent: 'from-rose-100 to-rose-50',
  },
  {
    name: 'Growth',
    price: '$49/mo',
    subtitle: 'Scale with confidence',
    features: ['10k active cards', 'Live payments', 'Priority support'],
    cta: 'Choose Growth',
    featured: true,
    accent: 'from-indigo-100 to-indigo-50',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For high-volume teams',
    features: ['Unlimited cards', 'Dedicated SLA', 'Compliance assistance'],
    cta: 'Contact sales',
    accent: 'from-emerald-100 to-emerald-50',
  },
];

const PricingCard = ({ tier }) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-gradient-to-b ${tier.accent} p-6 ring-1 ring-slate-200 shadow-sm ${
        tier.featured ? 'scale-[1.02] shadow-md' : ''
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">
          <Zap className="h-3.5 w-3.5" /> Popular
        </span>
      )}
      <h3 className="text-slate-900 text-xl font-semibold">{tier.name}</h3>
      <p className="mt-1 text-slate-600">{tier.subtitle}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
      </div>
      <ul className="mt-6 space-y-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-700">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={tier.name === 'Enterprise' ? '#contact' : '#'}
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm ring-1 ring-slate-200 transition ${
          tier.featured
            ? 'bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-700'
            : 'bg-white/80 text-slate-800 backdrop-blur hover:bg-white'
        }`}
      >
        {tier.cta}
      </a>
      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <Shield className="h-4 w-4 text-emerald-500" />
        No hidden fees. Cancel anytime.
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-slate-600">
          Start free, upgrade when you grow. Fair and predictable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
