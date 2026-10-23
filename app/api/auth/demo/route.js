import { NextResponse } from 'next/server';
import { isBanned } from '@/lib/db';
export async function POST(request) {
  const form = await request.formData();
  const userId = String(form.get('userId') || '');
  if (isBanned(userId)) {
    return NextResponse.json({ error: 'This account is banned.' }, { status: 403 });
  }
  const response = NextResponse.redirect(new URL('/', request.url));
  response.cookies.set('campus-demo-user', userId, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 * 30, path: '/' });
  return response;
}
