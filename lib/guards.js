import { isBanned } from './db.js';
import { jsonError } from './validation.js';

/** Resolve the acting user for a write request (demo: default maya-sharma). */
export function writeUserId(request) {
  return request.headers.get('x-user-id') || 'maya-sharma';
}

/** Reject a write from a banned session. Returns a Response when blocked, else null. */
export function rejectIfBanned(userId) {
  if (isBanned(userId)) return jsonError('This account is banned from posting.', 403);
  return null;
}
