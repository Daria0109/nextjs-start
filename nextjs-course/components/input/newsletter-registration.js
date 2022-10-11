import classes from './newsletter-registration.module.css';
import { useState } from 'react';

function NewsletterRegistration() {
	const [email, setEmail] = useState('');

	const onChangeEmailHandler = (e) => {
		setEmail(e.target.value);
	}

	function registrationHandler(event) {
		event.preventDefault();

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ userEmail: email }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(data => console.log(data))
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