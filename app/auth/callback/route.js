import { NextResponse } from 'next/server';
export async function GET(request) { const url = new URL(request.url); const next = url.searchParams.get('next') || '/'; return NextResponse.redirect(new URL(next, request.url)); }
