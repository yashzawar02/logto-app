import { useHandleSignInCallback } from '@logto/react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';

const Callback = () => {
	const navigate = useNavigate();
	const { isLoading } = useHandleSignInCallback(() => {
		// upon success, redirect to sign-in page
		navigate('/logto-app');
	});

	return isLoading ? (
		<Spinner title="Please wait, redirecting to dashboard" />
	) : null;
};

export default Callback;
