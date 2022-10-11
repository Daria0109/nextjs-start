import path from 'path';
import fs from 'fs';

export function buildPath(file) {
	return path.join(process.cwd(), 'data', file)
}

export function extractDataFromFile(filePath) {
	const fileData = fs.readFileSync(filePath);
	return JSON.parse(fileData);
}

export function writeDataToFile(filePath, data) {
	fs.writeFileSync(filePath, data);
}
