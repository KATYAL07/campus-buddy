import seed from '@/data/seed/demo.json';

const state = globalThis.__campusBuddyState || structuredClone(seed);
if (!globalThis.__campusBuddyState) globalThis.__campusBuddyState = state;

export function isDemoMode() { return !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; }
export function getUsers() { return state.users; }
export function getPosts() { return state.posts; }
export function getEvents() { return state.events; }
export function getHelpRequests() { return state.help; }
export function getChatMessages() { return state.chat; }
export function getUser(id) { return state.users.find((user) => user.id === id); }
export function isBanned(userId) {
  const user = getUser(userId);
  return Boolean(user && user.banned);
}
export function getPostAuthor(post) { return getUser(post.authorId); }
export function addPost(post) { state.posts.unshift({ ...post, id: `post-${Date.now()}`, createdAt: new Date().toISOString(), upvotes: 0 }); return post; }
export function addChatMessage(message) { state.chat.push({ ...message, id: `chat-${Date.now()}`, createdAt: new Date().toISOString() }); return message; }
