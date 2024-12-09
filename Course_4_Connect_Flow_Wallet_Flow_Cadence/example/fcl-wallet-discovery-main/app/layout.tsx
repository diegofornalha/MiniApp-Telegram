'use client';

import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import '../flow-config';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}
