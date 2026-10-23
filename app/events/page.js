import Link from 'next/link';
import { getEvents } from '@/lib/db';
import EventCard from '@/components/EventCard';
export default function Events() { const events = getEvents(); return <main><span className="eyebrow" style={{ color: 'var(--green)' }}>Campus calendar</span><h1 className="page-title">Good things<br />happen here.</h1><p className="lede">Workshops, talks, and community events from clubs across Bennett University.</p><div className="grid" style={{ marginTop: 42 }}>{events.map((event) => <EventCard key={event.id} event={event} />)}</div></main>; }
