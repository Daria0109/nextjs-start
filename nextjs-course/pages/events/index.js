import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AllEventsPage (props) {
    const router = useRouter();

    const findEventHandler = (year, month) => {
        const route = `/events/${year}/${month}`;

        router.push(route);
    }

    return (
        <>
            <Head>
                <title>All events</title>
                <meta
                    name="description"
                    content="Find a lot of great events that allow you to evolve..."
                />
            </Head>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={props.events} />
        </>
    )
}

export const getStaticProps = async () => {
    const events = await getAllEvents();

    return { props: { events }, revalidate: 60 }
}
