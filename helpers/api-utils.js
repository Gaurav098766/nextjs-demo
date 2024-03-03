export async function getAllEvents() {
  const response = await fetch(
    "https://fir-cfd73-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEevents = await getAllEvents();
  return allEevents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEevents = await getAllEvents();
  return allEevents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const allEevents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEevents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
