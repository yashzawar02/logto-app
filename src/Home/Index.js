import { useLogto } from '@logto/react';
import { useEffect, useState } from 'react';
import { baseUrl, redirectUrl } from '../constants';
import '../styles.css';

const Home = () => {
	const { isAuthenticated, signIn, signOut, fetchUserInfo } = useLogto();
	const [user, setUser] = useState('');

	useEffect(() => {
		(async () => {
			if (isAuthenticated) {
				console.log(`User authenticate? : ${isAuthenticated}`);
				const userInfo = await fetchUserInfo();
				setUser(userInfo);
			}
		})();
	}, [fetchUserInfo, isAuthenticated]);

	return (
		<div className="container">
			{!isAuthenticated && (
				<div className="button-container">
					<h3>Please sign in to continue...</h3>
					<button
						type="button"
						onClick={() => {
							void signIn(redirectUrl);
						}}
					>
						Sign in
					</button>
				</div>
			)}
			{isAuthenticated && (
				<div className="button-container">
					<h3>You have successfully logged in to your account.</h3>
					<button
						type="button"
						onClick={() => {
							void signOut(`${baseUrl}`);
						}}
					>
						Sign out
					</button>
				</div>
			)}
			{isAuthenticated && user && (
				<>
					<table>
						<thead>
							<tr>
								<th>Key</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(user).map(([key, value]) => (
								<tr key={key}>
									<td>{key}</td>
									<td>
										{typeof value === 'string' ? value : JSON.stringify(value)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default Home;
