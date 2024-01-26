import { Inter } from 'next/font/google';
import '@/src/styles/styles.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main>
					{children}
					<Analytics />
				</main>
			</body>
		</html>
	);
}
