import React from 'react';

const packages = [
  {
    title: 'Package 1',
    description: 'Description of package 1',
    price: '$999',
    duration: '7 days',
    image: '/images/tours/tour-1.jpg',
  },
  {
    title: 'Package 2',
    description: 'Description of package 2',
    price: '$799',
    duration: '5 days',
    image: '/images/tours/tour-2.jpg',
  },
  {
    title: 'Package 3',
    description: 'Description of package 3',
    price: '$1199',
    duration: '10 days',
    image: '/images/tours/tour-3.jpg',
  },
];

const PackageCards = () => {
  return (
    <section>
      <h2>Our Travel Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.title} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <p>Price: {pkg.price}</p>
            <p>Duration: {pkg.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageCards;
