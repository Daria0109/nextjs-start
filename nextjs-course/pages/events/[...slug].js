import { useRouter } from 'next/router';
import { fetcher } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { transformDataObjectToArray } from '../../helpers/object-utils';
import Head from 'next/head';

export default function FilteredEventsPage () {
    const [loadedEvents, setLoadedEvents] = useState(null);
    const router = useRouter();
    const filterData = router.query.slug;

    let headTitle = (
        <Head>
            <title>Filtered events</title>
            <meta
                name="description"
                content={`All events for your choice.`}
            />
        </Head>
    )

    const { data, error } = useSWR('https://nextjx-learning-default-rtdb.firebaseio.com/events.json', fetcher);

    useEffect(() => {
        if (data) {
            const transformedEvents = transformDataObjectToArray(data);
            setLoadedEvents(transformedEvents);
        }
    }, [data])

    if (!loadedEvents) {
        return (
            <>
                {headTitle}
                <p className="center">Loading...</p>
            </>
        )
    }

    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    const filteredEvents = loadedEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === filterYear && eventDate.getMonth() === filterMonth - 1;
    });

    if (isNaN(filterYear)
        || isNaN(filterMonth)
        || filterYear < 2020
        || filterYear > 2030
        || filterMonth < 1
        || filterMonth > 12
        || error) {
        return (
            <>
                {headTitle}
                <ErrorAlert>
                    <p className="center">Invalid filter! Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    headTitle = (
        <Head>
            <title>Filtered events</title>
            <meta
                name="description"
                content={`All events for ${filterMonth}/${filterYear}`}
            />
        </Head>
    )


    if (!filteredEvents || !filteredEvents.length) {
        return (
            <>
                {headTitle}
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(filterYear, filterMonth - 1);

    return (
        <>
            {headTitle}
            <Head>
                <title>Filtered events</title>
                <meta
                    name="description"
                    content={`All events for ${filterMonth}/${filterYear}`}
                />
            </Head>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
