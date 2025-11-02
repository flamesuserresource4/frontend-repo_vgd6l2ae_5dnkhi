import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="font-semibold tracking-tight text-slate-900">
            PastelPay
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
            aria-label="Sign in"
          >
            <User className="h-4 w-4" /> Sign in
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-slate-200/70 bg-gradient-to-r from-rose-50 to-indigo-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
