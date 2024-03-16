import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
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
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(),
    });
  };

  return (
    <div id="request-volunteer" className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Calendar</h1>
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Event title"
          value={newEvent.title}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 mr-2 rounded"
        />
        <input
          type="datetime-local"
          name="start"
          value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 mr-2 rounded"
        />
        <input
          type="datetime-local"
          name="end"
          value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 mr-2 rounded"
        />
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Event
        </button>
      </div>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className="h-[500px] p-10"
        />
      </div>
    </div>
  );
};

export default MyCalendar;
