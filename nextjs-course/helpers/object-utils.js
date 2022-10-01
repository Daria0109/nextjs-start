export const transformDataObjectToArray = (data) => {
	const transformedData = [];
	for (const key in data) {
		transformedData.push({
			id: key,
			...data[key]
		});
	}
	return transformedData;
}
