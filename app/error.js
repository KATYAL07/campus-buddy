'use client';
export default function Error({ reset }) { return <main><span className="eyebrow">Something went wrong</span><h1 className="page-title">That page needs<br />another try.</h1><button className="button accent" onClick={() => reset()}>Try again</button></main>; }
