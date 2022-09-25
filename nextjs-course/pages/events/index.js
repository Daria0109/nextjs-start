import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

export default function AllEventsPage () {
    const events = getAllEvents();
    const router = useRouter();

    const findEventHandler = (year, month) => {
        const route = `/events/${year}/${month}`;

        router.push(route);
    }

    return (
        <>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </>
    )
}