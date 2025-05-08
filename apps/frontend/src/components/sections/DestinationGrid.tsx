import React from 'react';

const destinations = [
  {
    name: 'Paris',
    image: '/images/destinations/paris.jpg',
  },
  {
    name: 'New York',
    image: '/images/destinations/new-york.jpg',
  },
  {
    name: 'Tokyo',
    image: '/images/destinations/tokyo.jpg',
  },
  {
    name: 'London',
    image: '/images/destinations/london.jpg',
  },
  {
    name: 'Rome',
    image: '/images/destinations/rome.jpg',
  },
];

const DestinationGrid = () => {
  return (
    <section>
      <h2>Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <div key={destination.name} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationGrid;
