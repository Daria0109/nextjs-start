import { v4 as uuidv4 } from 'uuid';
import { buildPath, extractDataFromFile, writeDataToFile } from '../../helpers/db-utils';


function handler (req, res) {
	try {
		const { userEmail } = req.body;
		if (!userEmail || !userEmail.includes('@')) {
			res.status(401).json({ message: 'Invalid email address.' });

			return;
		}
		const filePath = buildPath('emails.json');
		const data = extractDataFromFile(filePath);
		data.push({ id: uuidv4(), email: userEmail });
		writeDataToFile(filePath, JSON.stringify(data));

		res.status(201).json({ message: 'Signed up!' });
	} catch (err) {
		res.status(500).json({ message: 'Inserting new email failed' });
	}
}

export default handler;

