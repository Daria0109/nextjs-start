import { useRef, useState } from 'react';

export default function RenderTest () {
	const [email, setEmail] = useState('');
	const [feedback, setFeedback] = useState('');
	const [storedFeedbacks, setStoredFeedbacks] = useState([]);

	const submitFormHandler = (event) => {
		event.preventDefault();

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify({email, text: feedback}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(data => console.log(data));
	}

	const loadFeedbacksHandler = () => {
		fetch('/api/feedback' )
			.then(res => res.json())
			.then(data => setStoredFeedbacks(data.data));
	}

	return (
		<div>
			<h2>Send feedback</h2>
			<form onSubmit={submitFormHandler}>
				<div>
					<label htmlFor="email">Enter your Email</label>
					<input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label htmlFor="feedback">Your feedback</label>
					<textarea id="feedback" rows={5} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
				</div>
				<button type="submit">Send your feedback</button>
			</form>
			<br />
			<hr />
			<br />
			<button onClick={loadFeedbacksHandler}>Load feedbacks</button>
			<ul>
				{storedFeedbacks.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>

		</div>
	)

}