'use client';

import './globals.css';
import { PrivyProvider } from '@privy-io/react-auth';
import React, { useEffect, useState } from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// State to track app initialization
	const [isAppInitialized, setIsAppInitialized] = useState(false);

	useEffect(() => {
		// Ensure that the app ID exists before initializing Privy
		if (!process.env.NEXT_PUBLIC_PRIVY_APP_ID) {
			console.error(
				'Privy app ID is missing. Ensure NEXT_PUBLIC_PRIVY_APP_ID is set in your environment variables.'
			);
		} else {
			setIsAppInitialized(true);
		}
	}, []);

	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				{isAppInitialized ? (
					<PrivyProvider
						appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
						config={{
							appearance: {
								theme: 'light',
								accentColor: '#676FFF',
								logo: 'https://cryptologos.cc/logos/flow-flow-logo.png', // Replace with your logo
							},
							embeddedWallets: {
								createOnLogin: 'all-users',
							},
							// Flow EVM configuration
							defaultChain: {
								id: 747,
								name: 'Flow',
								network: 'flow',
								nativeCurrency: {
									name: 'Flow',
									symbol: 'FLOW',
									decimals: 18,
								},
								rpcUrls: {
									default: {
										http: [
											'https://mainnet.evm.nodes.onflow.org',
										],
									},
								},
								blockExplorers: {
									default: {
										name: 'Flowscan',
										url: 'https://evm.flowscan.io/',
									},
								},
							},
							supportedChains: [
								{
									id: 747,
									name: 'Flow',
									network: 'flow',
									nativeCurrency: {
										name: 'Flow',
										symbol: 'FLOW',
										decimals: 18,
									},
									rpcUrls: {
										default: {
											http: [
												'https://mainnet.evm.nodes.onflow.org',
											],
										},
									},
									blockExplorers: {
										default: {
											name: 'Flowscan',
											url: 'https://evm.flowscan.io/',
										},
									},
								},
							],
						}}
					>
						{children}
					</PrivyProvider>
				) : (
					<div>
						<h1>Application Error</h1>
						<p>
							Privy app ID is not set. Please check your
							configuration.
						</p>
					</div>
				)}
			</body>
		</html>
	);
}
