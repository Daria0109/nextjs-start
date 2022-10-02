import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';
import Head from 'next/head';

export default function HomePage (props) {
   return (
        <div>
            <Head>
                <title>Next Events</title>
                <meta
                    name="description"
                    content="Find a lot of great events that allow you to evolve..."
                />
            </Head>
            <EventList items={props.events} />
        </div>
   )
}

export const getStaticProps = async () => {
   const events = await getFeaturedEvents();

    return { props: { events }, revalidate: 1800 }
}

