import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function POST(request) { const form = await request.formData(); const userId = String(form.get('userId') || ''); const response = NextResponse.redirect(new URL('/', request.url)); response.cookies.set('campus-demo-user', userId, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 * 30, path: '/' }); return response; }
