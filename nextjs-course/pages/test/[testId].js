import path from 'path';
import fs from 'fs/promises';

export default function RenderTestDetail (props) {
	const { product } = props;

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<div>{product.description}</div>
	)
}

export const getStaticProps = async (context) => {
	const { params } = context;
	const testId = params.testId;
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const dataJson = await fs.readFile(filePath);
	const data = JSON.parse(dataJson);

	const product = data.products.find(product => product.id === testId);

	if (!product) {
		return { notFound: true }
	}

	return {
		props: {
			product: product
		}
	}
}

export const getStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const dataJson = await fs.readFile(filePath);
	const data = JSON.parse(dataJson);
	const pathsWithParams = data.products.map(product => ({
		params: { testId: product.id }
	}));

	return {
		paths: pathsWithParams,
		fallback: true
	}
}
