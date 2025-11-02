import React from 'react';

const posts = [
  {
    title: 'Designing a Minimalist Fintech Experience',
    excerpt:
      'How pastel palettes and sensible motion reduce cognitive load and build trust in financial products.',
    date: 'Oct 2025',
    tag: 'Design',
  },
  {
    title: 'A Practical Guide to Virtual Card Issuing',
    excerpt:
      'From onboarding to authorization controls — the essentials for launching card programs quickly.',
    date: 'Sep 2025',
    tag: 'Product',
  },
  {
    title: 'Pricing That Scales With Your Startup',
    excerpt:
      'Finding the right balance between free tiers and predictable spend as you grow.',
    date: 'Aug 2025',
    tag: 'Growth',
  },
];

const BlogCard = ({ post }) => (
  <article className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
    <div className="mb-3 inline-flex items-center gap-2 text-xs text-slate-500">
      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-rose-700">{post.tag}</span>
      <span>•</span>
      <span>{post.date}</span>
    </div>
    <h3 className="text-slate-900 text-lg font-semibold group-hover:text-indigo-600">
      {post.title}
    </h3>
    <p className="mt-2 text-slate-600">{post.excerpt}</p>
    <div className="mt-4 text-indigo-600 text-sm font-medium">Read more →</div>
  </article>
);

const Blog = () => {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          From the blog
        </h2>
        <p className="mt-3 text-slate-600">Insights on design, product, and growth.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.title} post={p} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
