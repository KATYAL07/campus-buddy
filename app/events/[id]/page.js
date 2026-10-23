import Link from 'next/link';
import { getEvents } from '@/lib/db';
import { formatFriendlyDateTimeLong } from '@/lib/format';
export default async function EventDetail({ params }) { const { id } = await params; const event = getEvents().find((item) => item.id === id) || getEvents()[0]; return <main><Link className="meta" href="/events">← All events</Link><article className="card" style={{ maxWidth: 760, marginTop: 28 }}><span className="eyebrow" style={{ color: 'var(--green)' }}>{event.category}</span><h1 className="page-title">{event.title}</h1><p className="lede">{event.description}</p><p className="meta">Hosted by {event.club}<br />{formatFriendlyDateTimeLong(event.date)}<br />{event.venue}</p><button className="button accent">RSVP · {event.rsvps} going</button></article></main>; }
