import './HomePage.css';
import Form from '../../components/Form/Form';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SubmitButton from '../../components/SubmitButton';
import GeneratedLink from '../../components/GeneratedLink/GeneratedLink';
import toast, { Toaster } from 'react-hot-toast';

function HomePage() {
	const [ newUrl, setNewUrl ] = useState('');
	const [ submited, setSubmited ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ data, setData ] = useState({
		url: '',
		password: ''
	});

	useEffect(
		() => {
			let timeout;
			let toastId;
			if (isLoading) {
				timeout = setTimeout(() => {
					toastId = toast.loading('please wait, our server is taking longer to respond than usual', {
						style: {
							fontFamily: 'Mario-Kart',
							border: '1px solid #f8c5ca',
							padding: '16px',
							color: '#222222'
						}
					});
				}, 5000);
			} else {
				toast.dismiss(toastId);
			}
			return () => {
				clearTimeout(timeout);
			};
		},
		[ isLoading ]
	);
	useEffect(
		() => {
			if (submited) {
				toast('you can now use this protected URL!', {
					icon: '🔒',
					style: {
						fontFamily: 'Mario-Kart',
						border: '1px solid #222222',
						padding: '16px',
						color: '#222222'
					}
				});
			}
		},
		[ submited ]
	);
	function handleChange(event) {
		const { name, value } = event.target;
		setData((prevData) => ({
			...prevData,
			[name]: value
		}));
		setSubmited(false);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.post(import.meta.env.VITE_API_URL + '/api/generate', data);

			if (response.data && response.data.shortId) {
				setNewUrl(window.location.href + response.data.shortId);
				setSubmited(true);
			} else {
				throw new Error('Something went wrong');
			}
		} catch (error) {
			console.log(error);

			toast.error(error.response.data.message, {
				style: {
					fontFamily: 'Mario-Kart',
					border: '1px solid #f8c5ca',
					padding: '16px',
					color: '#f8c5ca'
				},
				iconTheme: {
					primary: '#f8c5ca',
					secondary: '#fff'
				}
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="container">
			<div>
				<Toaster />
			</div>
			<div className="background-container">
				<main>
					<div className="black-item-1" />
					<div className="black-item-2" />

					<div className="black-item-3" />
					<div id="trackingDiv">
						<div className="pink-item-1">
							<div className="form-overlay">
								<Form data={data} handleChange={handleChange} />
							</div>
						</div>
						<div className="main-pink">
							<div className="sub-pink">
								<div className="pink-item-3">
									{data.password && data.url && !submited ? (
										<SubmitButton
											className="submit-button"
											onClick={handleSubmit}
											isLoading={isLoading}
											label="SUBMIT"
										/>
									) : submited ? (
										<GeneratedLink link={newUrl} />
									) : null}
								</div>
								<div className="pink-item-4" />
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default HomePage;
