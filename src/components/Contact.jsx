import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // In a full app, this would POST to the backend. For now we simulate.
    setTimeout(() => {
      setStatus('sent');
    }, 800);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Contact sales
        </h2>
        <p className="mt-3 text-slate-600">We typically respond within one business day.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-200/60 focus:ring-4"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-200/60 focus:ring-4"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-200/60 focus:ring-4"
                placeholder="Tell us a bit about your use case..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === 'idle' && 'Send message'}
              {status === 'submitting' && 'Sending...'}
              {status === 'sent' && 'Sent!'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-emerald-700">Thanks! We received your message.</p>
            )}
          </div>
        </form>

        <div className="rounded-2xl bg-gradient-to-b from-rose-50 to-indigo-50 p-6 ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Talk to a human</h3>
          <p className="mt-2 text-slate-600">
            Our team can help with pricing, technical questions, and bespoke integrations.
          </p>
          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-rose-500" /> support@pastelpay.com</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-indigo-600" /> +1 (555) 123-4567</div>
          </div>
          <div className="mt-8 rounded-xl bg-white p-4 ring-1 ring-slate-200">
            <p className="text-sm text-slate-600">
              Looking for our knowledge base? Browse quick-start guides and API docs in the Help Center.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
