import { LogtoProvider, UserScope } from '@logto/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { appId, endpoint } from './constants';
import Callback from './Callback/Index';
import Home from './Home/Index';

const App = () => {
	const config = {
		appId,
		endpoint,
		scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData],
	};

	return (
		<BrowserRouter>
			<LogtoProvider config={config}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/callback" element={<Callback />} />
				</Routes>
			</LogtoProvider>
		</BrowserRouter>
	);
};

export default App;
