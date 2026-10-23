import { getEvents, isDemoMode } from '@/lib/db';
export async function GET() { return Response.json({ demo: isDemoMode(), events: getEvents() }); }
