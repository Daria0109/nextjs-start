import path from 'path';
import fs from 'fs';

export function buildFeedbackPath () {
	return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractDataFromFile (filePath) {
	const fileData = fs.readFileSync(filePath);
	return JSON.parse(fileData);
}

function handler (req, res) {
	if (req.method === 'POST') {
		const { email, text } = req.body;

		const newFeedback = {
			id: new Date(),
			email,
			text
		};

		const filePath = buildFeedbackPath();
		const data = extractDataFromFile(filePath);
		data.push(newFeedback);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({ message: 'Success', data: newFeedback })
	} else {
		const filePath = buildFeedbackPath();
		const data = extractDataFromFile(filePath);
		res.status(200).json({ message: 'Working', data })
	}
}

export  default handler;
