import { getDemoUser } from '@/lib/db';
import { cleanText, jsonError } from '@/lib/validation';
export async function POST(request) { if (!getDemoUser(request)) return jsonError('Only signed-in Bennett University students can report content.', 401); const body = await request.json().catch(() => ({})); const reason = cleanText(body.reason, 500); const targetId = cleanText(body.targetId, 100); if (!reason || !targetId) return jsonError('A target and reason are required.'); return Response.json({ received: true }, { status: 201 }); }
