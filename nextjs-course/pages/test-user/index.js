export default function TestUserPage (props) {
	return <div>{props.username}</div>
}

export const getServerSideProps = async (context) => {
	const { params, req, res } = context;

	return {
		props: {
			username: 'Daria'
		}
	}
}