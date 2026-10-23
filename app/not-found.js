import Link from 'next/link';
export default function NotFound() { return <main><span className="eyebrow">404</span><h1 className="page-title">This page is<br />not on campus.</h1><Link className="button accent" href="/">Back home</Link></main>; }
