import { useHandleSignInCallback } from '@logto/react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
	const navigate = useNavigate();
	const { isLoading } = useHandleSignInCallback(() => {
		navigate('/');
	});

	return isLoading ? <p>Please wait, redirecting to dashboard...</p> : null;
};

export default Callback;
