import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://DBUser:1991BnMb6ysYm9QR@cluster0.xxtdhs3.mongodb.net/?retryWrites=true&w=majority';
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true
}

// if (!process.env.MONGODB_URI) {
// 	throw new Error('Add Mongo URI to .env.local')
// }

const client = new MongoClient(uri, options);

export default client;
