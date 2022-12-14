import { buildPath, extractDataFromFile, writeDataToFile } from '../../../helpers/db-utils';
import { v4 as uuidv4 } from 'uuid';

async function handler (req, res) {
	const eventId = req.query.eventId;

	try {
		if (req.method === 'POST') {
			const { email, name, text } = req.body;
			const isInvalidEmail = !email.includes('@');
			const isInvalidName = !name || !name.trim();
			const isInvalidText = !text || !text.trim();

			if (isInvalidEmail || isInvalidName || isInvalidText) {
				setTimeout(() => res.status(422).json({ message: 'Input is invalid' }), 2000);
				return;
			}

			const newComment = { id: uuidv4(), eventId, email, name, text };

			const filePath = buildPath('comments.json');
			const data = extractDataFromFile(filePath);
			data.push(newComment);
			writeDataToFile(filePath, JSON.stringify(data));

			setTimeout(() => res.status(201).json({ message: 'Added a comment.', comment: newComment }), 3000)
			return;
		}
	} catch (err) {
		setTimeout(() => res.status(500).json({ message: 'Inserting comment failed' }), 2000);
		return;
	}

	try {
		if (req.method === 'GET') {
			const filePath = buildPath('comments.json');
			const data = extractDataFromFile(filePath);
			const specificEventComments = data.filter(item => item.eventId === eventId);

			setTimeout(() => res.status(200).json({ comments: specificEventComments }), 3000);
		}
	} catch (err) {
		setTimeout(() => res.status(500).json({ comments: 'Getting comments failed.' }), 2000);
	}

}

export default handler;
