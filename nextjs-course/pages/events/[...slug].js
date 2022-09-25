import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function FilteredEventsPage () {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <div className="center">Loading...</div>
    }

    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if (isNaN(filterYear)
        || isNaN(filterMonth)
        || filterYear < 2020
        || filterYear > 2030
        || filterMonth < 1
        || filterMonth > 12) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">Invalid filter! Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const events = getFilteredEvents({
        year: filterYear,
        month: filterMonth
    });

    if (!events || !events.length) {
        return (
            <>
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
            <ResultsTitle date={date} />
            <EventList items={events} />
        </>
    )
}
