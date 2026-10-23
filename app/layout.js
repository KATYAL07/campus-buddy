import './globals.css';
import Shell from '@/components/Shell';

export const metadata = { title: 'Campus Buddy', description: 'A student-built college hub for learning, help, and campus community.' };

export default function RootLayout({ children }) { return <html lang="en"><body><Shell>{children}</Shell></body></html>; }
