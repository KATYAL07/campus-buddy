import Link from 'next/link';
import { isDemoMode } from '@/lib/db';

export default function Shell({ children }) {
  return <div className="shell">
    <header className="site-header"><div className="header-inner">
      <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true" /> Campus Buddy</Link>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/feed">Study Feed</Link><Link href="/events">Events</Link><Link href="/help">Help Board</Link><Link href="/chat">Lounge</Link><Link href="/contacts">Contacts</Link><Link href="/login">Sign in</Link><Link href="/privacy">Privacy</Link>
        {isDemoMode() && <span className="demo-badge">Demo mode</span>}
      </nav>
    </div></header>
    {children}
    <footer className="footer"><div className="footer-inner"><span>Built for students at Bennett University</span><Link href="/privacy">Privacy policy</Link></div></footer>
  </div>;
}
