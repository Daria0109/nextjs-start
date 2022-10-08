import { buildFeedbackPath, extractDataFromFile } from './feedback';

function handler (req, res) {
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const feedbacksData = extractDataFromFile(filePath);
	const selectedFeedback = feedbacksData.find(feedback => feedback.id === feedbackId);
	res.status(200).json({ feedback: selectedFeedback })
}

export default handler;
