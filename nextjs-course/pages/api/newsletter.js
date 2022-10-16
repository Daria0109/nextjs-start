import { v4 as uuidv4 } from 'uuid';
import { buildPath, extractDataFromFile, writeDataToFile } from '../../helpers/db-utils';


function handler (req, res) {
	try {
		const { userEmail } = req.body;
		if (!userEmail || !userEmail.includes('@')) {
			setTimeout(() => res.status(401).json({ message: 'Invalid email address.' }), 2000);
			return;
		}
		const filePath = buildPath('emails.json');
		const data = extractDataFromFile(filePath);
		data.push({ id: uuidv4(), email: userEmail });
		writeDataToFile(filePath, JSON.stringify(data));

		setTimeout(() => res.status(201).json({ message: 'Signed up!' }), 3000);

	} catch (err) {
		setTimeout(() => res.status(500).json({ message: 'Inserting new email failed' }), 2000);
	}
}

export default handler;

