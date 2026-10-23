import { addPost, getPosts, isDemoMode } from '@/lib/db';
import { cleanText, jsonError, validUrl } from '@/lib/validation';

export async function GET() { return Response.json({ demo: isDemoMode(), posts: getPosts() }); }
export async function POST(request) { const body = await request.json().catch(() => ({})); const title = cleanText(body.title, 140); const description = cleanText(body.description, 1000); if (!title || !description) return jsonError('Title and description are required.'); const post = { authorId: 'maya-sharma', title, description, subject: cleanText(body.subject, 80) || 'General', branch: cleanText(body.branch, 30) || 'Other', semester: Number(body.semester) || 1, type: cleanText(body.type, 30) || 'other', link: body.link ? validUrl(body.link) : '' }; if (body.link && !post.link) return jsonError('Use an http or https link.'); return Response.json(addPost(post), { status: 201 }); }
