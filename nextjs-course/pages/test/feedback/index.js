import { buildFeedbackPath, extractDataFromFile } from '../../api/feedback';
import { useState } from 'react';

export default function FeedbacksPage (props) {
	const [feedback, setFeedback] = useState(null);

	const selectFeedbackHandler = (id) => {
		fetch(`/api/${id}`)
			.then(res => res.json())
			.then(data => setFeedback(data.feedback))
	}

	return (
		<>
			{feedback && <h3>{feedback.email}</h3>}
			<ul>
				{props.feedbackItems.map(item => (
						<li key={item.id}>
							{item.text}
							<button onClick={selectFeedbackHandler.bind(null, item.id)}>Select feedback</button>
						</li>
					)
				)}
			</ul>
		</>
	)
}

export const getStaticProps = () => {
	const filePath = buildFeedbackPath();
	const data = extractDataFromFile(filePath);

	return {
		props: {
			feedbackItems: data
		}
	}
}

