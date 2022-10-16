import classes from './newsletter-registration.module.css';
import { useContext, useState } from 'react';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
	const [email, setEmail] = useState('');

	const notificationCtx = useContext(NotificationContext);

	const onChangeEmailHandler = (e) => {
		setEmail(e.target.value);
	}

	function registrationHandler(event) {
		event.preventDefault();

		notificationCtx.showNotification({
			title: 'Signing up...',
			message: 'Registering for newsletter',
			status: 'pending'
		});

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ userEmail: email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return res.json().then(error => {
					throw new Error(error.message || 'Something went wrong...')
				})
			})
			.then(data => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully registered for newsletter.',
					status: 'success'
				});
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong...',
					status: 'error'
				});
			})
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						value={email}
						onChange={onChangeEmailHandler}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;