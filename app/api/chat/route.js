import { addChatMessage, getChatMessages, isDemoMode } from '@/lib/db';
import { cleanText, jsonError } from '@/lib/validation';
export async function GET() { return Response.json({ demo: isDemoMode(), messages: getChatMessages().slice(-50) }); }
export async function POST(request) { const body = await request.json().catch(() => ({})); const message = cleanText(body.message, 500); if (!message) return jsonError('Message cannot be empty.'); return Response.json(addChatMessage({ authorId: 'maya-sharma', message }), { status: 201 }); }
