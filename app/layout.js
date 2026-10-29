import './globals.css';
import Shell from '@/components/Shell';

const description = 'A student-built college hub for learning, help, and campus community.';

export const metadata = {
  title: 'Campus Buddy',
  description,
  applicationName: 'Campus Buddy',
  openGraph: {
    title: 'Campus Buddy',
    description,
    siteName: 'Campus Buddy',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Campus Buddy',
    description,
  },
};

export default function RootLayout({ children }) { return <html lang="en"><body><Shell>{children}</Shell></body></html>; }
