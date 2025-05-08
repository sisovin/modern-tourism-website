import React from 'react';
import { useRouter } from 'next/router';

const PackageDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder for fetching package details using the slug
  const packageDetails = {
    title: 'Sample Package',
    description: 'This is a sample package description.',
    price: '$999',
    duration: '7 days',
    image: '/images/tours/tour-1.jpg',
  };

  return (
    <div>
      <section>
        <img src={packageDetails.image} alt={packageDetails.title} />
        <h1>{packageDetails.title}</h1>
        <p>{packageDetails.description}</p>
        <p>Price: {packageDetails.price}</p>
        <p>Duration: {packageDetails.duration}</p>
      </section>
    </div>
  );
};

export default PackageDetailsPage;
