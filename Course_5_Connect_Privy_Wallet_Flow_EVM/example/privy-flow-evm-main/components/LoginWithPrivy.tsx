'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function LoginWithPrivy() {
	const { ready, authenticated, login, logout, user } = usePrivy();

	if (!ready) return <p className="text-center text-gray-600">Loading...</p>;

	return (
		<div className="page-container">
			<div className="card">
				{authenticated ? (
					<div>
						{user?.email && (
							<p className="connected-text">
								Welcome,{' '}
								<span className="connected-username">
									{String(user?.email?.address)}
								</span>
								!
							</p>
						)}
						<p className="connected-text">
							Connected Wallet:{' '}
							<span className="connected-username">
								{user?.wallet?.address}
							</span>
						</p>
						<button
							onClick={logout}
							className="button button-disconnect bg-gray-500 text-white font-semibold w-full py-2 rounded-md mt-4 hover:bg-gray-600 transition"
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<h1 className="card-title text-black">Sign In</h1>
						<p className="card-subtitle text-gray-600">
							Connect with Privy to get started
						</p>
						<button
							onClick={login}
							className="button button-connect bg-green-500 text-white font-semibold w-full py-2 rounded-md hover:bg-green-600 transition"
						>
							Login with Privy
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
