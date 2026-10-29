import Link from 'next/link';
import { getEvents, getHelpRequests, getPosts, getUsers } from '@/lib/db';

export default function Home() {
  const posts = getPosts(); const events = getEvents(); const help = getHelpRequests(); const users = getUsers();
  return <main>
    <span className="eyebrow">GDG Bennett On Campus · Bennett University</span>
    <h1 className="page-title">Your campus,<br /><span style={{ color: 'var(--red)' }}>in one place.</span></h1>
    <p className="lede">A private student hub for Bennett University students to find useful study material, ask better questions, attend GDG Bennett On Campus events, and keep the campus conversation moving.</p>
    <div style={{ marginTop: 26, display: 'flex', gap: 10, flexWrap: 'wrap' }}><Link className="button accent" href="/feed">Explore the feed</Link><Link className="button secondary" href="/events">See what is next</Link></div>
    <div className="grid" style={{ marginTop: 54 }}><div className="stat"><strong>{posts.length}</strong><span className="meta">study resources</span></div><div className="stat" style={{ borderColor: 'var(--green)' }}><strong>{events.length}</strong><span className="meta">upcoming events</span></div><div className="stat" style={{ borderColor: 'var(--blue)' }}><strong>{users.length}</strong><span className="meta">demo students</span></div></div>
    <div className="section-head"><h2>Make progress together</h2><Link className="meta" href="/help">Browse all help requests →</Link></div>
    <div className="grid"><div className="card"><span className="eyebrow">01 · Learn</span><h3>Study feed</h3><p className="meta">Notes, PYQs, links, and practical explainers shared by people in your branch.</p></div><div className="card"><span className="eyebrow" style={{ color: 'var(--green)' }}>02 · Ask</span><h3>Help board</h3><p className="meta">Get unstuck with focused questions and replies from classmates.</p></div><div className="card"><span className="eyebrow" style={{ color: 'var(--blue)' }}>03 · Show up</span><h3>Campus events</h3><p className="meta">Find the next workshop, talk, or community gathering worth your time.</p></div></div>
  </main>;
}
