import { transformDataObjectToArray } from './object-utils';

export const fetcher = async (url) => {
	const response = await fetch(url);
	if (!response.ok) throw new Error();
	return response.json();
}

export const getAllEvents = async () => {
	const response = await fetch('https://nextjx-learning-default-rtdb.firebaseio.com/events.json');
	const data = await response.json();
	const transformedEvents = transformDataObjectToArray(data);

	return transformedEvents;
}

export const getFeaturedEvents = async () => {
	const events = await getAllEvents();
	return events.filter(event => event.isFeatured);
}

export const getEventById = async (id) => {
	const events = await getAllEvents();
	return events.find(event => id === event.id);
}

export const getFilteredEvents = async (dateFilter) => {
	const { year, month } = dateFilter;
	const events = await getAllEvents();

	return events.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});
}