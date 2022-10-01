export default function TestUserDetailsPage (props) {
	return (
		<h1>{props.id}</h1>
	)
}

export const getServerSideProps = async (context) => {
	const { params, res, req } = context;

	return {
		props: {
			id: `User ID - ${params.userId}`
		}
	}
}
