'use client';

import { useAuth } from '@/context/AuthContext';

export default function Home() {
	const { user, loggedIn, logIn, logOut } = useAuth();

	return (
		<div className="page-container">
			<div className="card">
				<h1 className="card-title">Wallet Discovery</h1>
				<p className="card-subtitle">
					Connect your wallet to get started
				</p>

				{loggedIn ? (
					<div className="space-y-4">
						<p className="connected-text">
							Connected as:{' '}
							<span className="connected-username">
								{user?.addr}
							</span>
						</p>
						<button
							onClick={logOut}
							className="button button-disconnect"
						>
							Disconnect Wallet
						</button>
					</div>
				) : (
					<button onClick={logIn} className="button button-connect">
						Connect Wallet
					</button>
				)}
			</div>
		</div>
	);
}
