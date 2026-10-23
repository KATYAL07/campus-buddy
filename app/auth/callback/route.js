import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function GET(request) {
	const url = new URL(request.url);
	const code = url.searchParams.get('code');
	const next = url.searchParams.get('next') || '/';
	if (!code || !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
		return NextResponse.redirect(new URL('/login?error=auth', request.url));
	}

	const response = NextResponse.redirect(new URL(next, request.url));
	const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			getAll() { return request.cookies.getAll(); },
			setAll(cookies) { cookies.forEach(({ name, value, options }) => response.cookies.set(name, value, options)); }
		}
	});
	const { data, error } = await supabase.auth.exchangeCodeForSession(code);
	const email = data.user?.email?.toLowerCase() || '';
	const allowedDomain = (process.env.ALLOWED_EMAIL_DOMAIN || 'bennett.edu.in').toLowerCase().replace(/^@/, '');
	if (error || !email.endsWith(`@${allowedDomain}`)) {
		await supabase.auth.signOut();
		return NextResponse.redirect(new URL('/login?error=bennett-only', request.url));
	}
	return response;
}
