import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 2),
    },
    {
      title: 'Event 2',
      start: new Date(2024, 3, 7),
      end: new Date(2024, 3, 8),
    },
    // Add 15 more dummy events
    {
      title: 'Event 3',
      start: new Date(2024, 3, 11),
      end: new Date(2024, 3, 12),
    },
    {
      title: 'Event 4',
      start: new Date(2024, 3, 15),
      end: new Date(2024, 3, 16),
    },
    {
      title: 'Event 5',
      start: new Date(2024, 3, 18),
      end: new Date(2024, 3, 19),
    },
    {
      title: 'Event 6',
      start: new Date(2024, 3, 22),
      end: new Date(2024, 3, 23),
    },
    {
      title: 'Event 7',
      start: new Date(2024, 3, 25),
      end: new Date(2024, 3, 26),
    },
    {
      title: 'Event 8',
      start: new Date(2024, 3, 28),
      end: new Date(2024, 3, 29),
    },
    {
      title: 'Event 9',
      start: new Date(2024, 4, 2),
      end: new Date(2024, 4, 3),
    },
    {
      title: 'Event 10',
      start: new Date(2024, 4, 6),
      end: new Date(2024, 4, 7),
    },
    {
      title: 'Event 11',
      start: new Date(2024, 4, 10),
      end: new Date(2024, 4, 11),
    },
    {
      title: 'Event 12',
      start: new Date(2024, 4, 14),
      end: new Date(2024, 4, 15),
    },
    {
      title: 'Event 13',
      start: new Date(2024, 4, 18),
      end: new Date(2024, 4, 19),
    },
    {
      title: 'Event 14',
      start: new Date(2024, 4, 22),
      end: new Date(2024, 4, 23),
    },
    {
      title: 'Event 15',
      start: new Date(2024, 4, 26),
      end: new Date(2024, 4, 27),
    },
    {
      title: 'Event 16',
      start: new Date(2024, 4, 30),
      end: new Date(2024, 4, 31),
    },
  ];

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className='h-[700px] p-10'
      />
    </div>
  );
};

export default MyCalendar;
