import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

export default function RenderTest (props) {
	const { products } = props;

	return (
		<ul>
			{products.map(item => (
				<li key={item.id}>
					<Link href={`/test/${item.id}`}>{item.name}</Link>
				</li>
			))}
		</ul>
	)

}

export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const dataJson = await fs.readFile(filePath);
	const data = JSON.parse(dataJson);

	return {
		props: {
			products: data.products
		}
	}
}
