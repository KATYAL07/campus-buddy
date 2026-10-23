import Link from 'next/link';
import { getEvents } from '@/lib/db';

export default function Events() {
	const events = getEvents();
	return <main><span className="eyebrow" style={{ color: 'var(--green)' }}>GDG Bennett On Campus event calendar</span><h1 className="page-title">Good things<br />happen here.</h1><p className="lede">GDG Bennett On Campus events for Bennett University students, plus selected activities from clubs across campus.</p><div className="grid" style={{ marginTop: 42 }}>{events.map((event) => <article className="card" key={event.id}><span className="tag">{event.category}</span><h3>{event.title}</h3><p className="meta">{event.club}<br />{new Date(event.date).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}<br />{event.venue}</p><p className="meta">{event.description}</p><Link className="button secondary" href={`/events/${event.id}`}>View event · {event.rsvps} going</Link></article>)}</div></main>;
}
