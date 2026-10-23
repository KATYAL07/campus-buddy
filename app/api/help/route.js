import { getHelpRequests, isDemoMode } from '@/lib/db';
export async function GET() { return Response.json({ demo: isDemoMode(), help: getHelpRequests() }); }
