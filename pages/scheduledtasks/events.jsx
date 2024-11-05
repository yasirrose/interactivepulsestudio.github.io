import React from 'react';

const EVENTS = () => {
    const events = [
        {
            event_id: 1,
            title: "Event 1",
            start: new Date().setHours(9, 0, 0), // 9:00 AM
            end: new Date().setHours(10, 0, 0), // 10:00 AM
            disabled: true,
            admin_id: [1, 2, 3, 4],
        },
        {
            event_id: 2,
            title: "Event 2",
            start: new Date().setHours(10, 0, 0), // 10:00 AM
            end: new Date().setHours(12, 0, 0), // 12:00 PM
            admin_id: 2,
            color: "#50b500",
        },
        {
            event_id: 3,
            title: "Event 3",
            start: new Date().setHours(11, 0, 0), // 11:00 AM
            end: new Date().setHours(12, 0, 0), // 12:00 PM
            admin_id: 1,
            editable: false,
            deletable: false,
        },
        {
            event_id: 4,
            title: "Event 4",
            start: new Date(new Date().setHours(9, 30, 0)).setDate(new Date().getDate() - 2),
            end: new Date(new Date().setHours(11, 0, 0)).setDate(new Date().getDate() - 2),
            admin_id: 2,
            color: "#900000",
        },
        {
            event_id: 5,
            title: "Event 5",
            start: new Date(new Date().setHours(10, 30, 0)).setDate(new Date().getDate() - 2),
            end: new Date(new Date().setHours(14, 0, 0)).setDate(new Date().getDate() - 2),
            admin_id: 2,
            editable: true,
        },
        {
            event_id: 6,
            title: "Event 6",
            start: new Date(new Date().setHours(10, 30, 0)).setDate(new Date().getDate() - 4),
            end: new Date(new Date().setHours(14, 0, 0)),
            admin_id: 2,
        },
    ];

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.event_id}>
                        {event.title} - {new Date(event.start).toString()} to {new Date(event.end).toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EVENTS;
