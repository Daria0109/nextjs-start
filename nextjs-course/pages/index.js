import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';

export default function HomePage (props) {
   return (
        <div>
            <EventList items={props.events} />
        </div>
   )
}

export const getStaticProps = async () => {
   const events = await getFeaturedEvents();

    return { props: { events }, revalidate: 1800 }
}

