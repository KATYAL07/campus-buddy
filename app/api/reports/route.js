import { rejectIfBanned, writeUserId } from '@/lib/guards';
import { cleanText, jsonError } from '@/lib/validation';
export async function POST(request) {
  const userId = writeUserId(request);
  const blocked = rejectIfBanned(userId);
  if (blocked) return blocked;
  const body = await request.json().catch(() => ({}));
  const reason = cleanText(body.reason, 500);
  const targetId = cleanText(body.targetId, 100);
  if (!reason || !targetId) return jsonError('A target and reason are required.');
  return Response.json({ received: true }, { status: 201 });
}
