import Link from 'next/link';
import { getEvents } from '@/lib/db';
import EventCard from '@/components/EventCard';
export default async function EventDetail({ params }) { const { id } = await params; const event = getEvents().find((item) => item.id === id) || getEvents()[0]; return <main><Link className="meta" href="/events">← All events</Link><EventCard event={event} detail /></main>; }
