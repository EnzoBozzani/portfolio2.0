import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer} from '@/src/components';
import '@/src/styles/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enzo Bozzani - Software Developer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='layout'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
