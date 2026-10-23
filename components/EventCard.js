import Link from 'next/link';

const locale = 'en-IN';

function whenLabel(date, detail) {
  return detail
    ? new Date(date).toLocaleString(locale, { dateStyle: 'full', timeStyle: 'short' })
    : new Date(date).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' });
}

export default function EventCard({ event, detail = false }) {
  const when = whenLabel(event.date, detail);
  if (detail) {
    return (
      <article className="card" style={{ maxWidth: 760, marginTop: 28 }}>
        <span className="eyebrow" style={{ color: 'var(--green)' }}>{event.category}</span>
        <h1 className="page-title">{event.title}</h1>
        <p className="lede">{event.description}</p>
        <p className="meta">Hosted by {event.club}<br />{when}<br />{event.venue}</p>
        <button className="button accent">RSVP · {event.rsvps} going</button>
      </article>
    );
  }
  return (
    <article className="card">
      <span className="tag">{event.category}</span>
      <h3>{event.title}</h3>
      <p className="meta">{event.club}<br />{when}<br />{event.venue}</p>
      <p className="meta">{event.description}</p>
      <Link className="button secondary" href={`/events/${event.id}`}>View event · {event.rsvps} going</Link>
    </article>
  );
}
