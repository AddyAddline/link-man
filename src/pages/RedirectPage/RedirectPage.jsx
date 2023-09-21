import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RedirectPage.css';
import InputBox from '../../components/InputBox/InputBox';
import SubmitButton from '../../components/SubmitButton';

function RedirectPage() {
	const [ url, setUrl ] = useState('');
	const [ checkUrl, setCheckUrl ] = useState(true);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ password, setPassword ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ error, setError ] = useState(false);
	const [ buttonLabel, setButtonLabel ] = useState('Submit');
	const { shortId } = useParams();

	const handleChange = (event) => {
		setPassword(event.target.value);
		setError(false);
	};
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.post(import.meta.env.VITE_API_URL + '/api/checkurl', {
					shortId
				});
			} catch (e) {
				setCheckUrl(false);
				setMessage(e.response.data.message);
			}
		}
		fetchData();
	}, []);
	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.post(import.meta.env.VITE_API_URL + '/api/redirect', {
				shortId,
				password
			});
			setIsLoading(false);
			if (response.status === 200) {
				console.log(window.location.href);
				setUrl(response.data.url);
				setButtonLabel('Redirecting...');
				window.location.href = response.data.url;
			}
		} catch (e) {
			setError(true);
			console.log(e);
			setPassword('');
			setMessage(e.response.data.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="redirect-page-container">
			{checkUrl ? (
				<div className="redirect-page-form-container">
					<InputBox
						className="password-box"
						name="password"
						type="password"
						placeholder="Enter password"
						uniqueId="password-eye"
						onChange={handleChange}
						value={password}
					/>
					<div className="redirect-page-submit">
						<SubmitButton
							className={`redirect-page-submit-button ${error ? 'error' : null}`}
							label={error ? message : buttonLabel}
							onClick={handleSubmit}
							isLoading={isLoading}
							isError={error}
						/>
					</div>
				</div>
			) : (
				<div className="redirect-page-form-container">
					<div className="url-not-found-text">{message}</div>
				</div>
			)}
		</div>
	);
}
export default RedirectPage;
