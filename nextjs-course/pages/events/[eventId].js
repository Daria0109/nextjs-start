import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getFeaturedEvents, getEventById } from '../../helpers/api-utils';
import Head from 'next/head';
import Comments from '../../components/input/comments';

export default function EventDetailPage (props) {
    const { event } = props;

    if (!event) {
        return (
            <div className="center">
                <p>Event not found!</p>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{props.event.title}</title>
                <meta
                    name="description"
                    content={props.event.description}
                />
            </Head>
            <EventSummary title={event?.title} />
            <EventLogistics
                date={event?.date}
                address={event?.location}
                image={event?.image}
                imageAlt={event?.title}
            />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </>
    )
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const event = await getEventById(params.eventId);

    if (!event) {
        return { notFound: true }
    }

    return { props: { event }, revalidate: 30 };
}

export const getStaticPaths = async () => {
    const events = await getFeaturedEvents();
    const pathsWithParams = events.map(event => ({ params: { eventId: event.id } }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking'
    }
}