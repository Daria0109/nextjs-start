import { useEffect, useState } from 'react';
import useSWR from 'swr'

export default function LastSalesPage (props) {
	const [salesState, setSalesState] = useState(props.data);

	const fetcher = async (url) => {
		const response = await fetch(url);
		if (!response.ok) throw new Error();
		return response.json();
	}
	const { data, error } = useSWR('https://nextjx-learning-default-rtdb.firebaseio.com/sales.json', fetcher);

	useEffect(() => {
		if (data) {
			const transformedDate = [];
			for (const key in data) {
				transformedDate.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume
				});
			}
			setSalesState(transformedDate);
		}
	}, [data])

	if (error) {
		return <p>Request failed.</p>
	}

	if (!data && !salesState) {
		return (
			<p>Loading...</p>
		)
	}

	return (
		<ul>
			{salesState.map(sale => (
				<li key={sale.id}>
					{`${sale.username} - ${sale.volume}`}
				</li>
			))}
		</ul>
	)
}

export const getStaticProps = async () => {
	const response = await fetch('https://nextjx-learning-default-rtdb.firebaseio.com/sales.json');
	const data = await response.json();
	const transformedData = [];
	for (const key in data) {
		transformedData.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume
		});
	}

	return { props: { data: transformedData }, revalidate: 10 }
}
