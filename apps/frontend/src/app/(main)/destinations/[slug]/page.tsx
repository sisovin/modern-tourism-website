import React from 'react';
import { useRouter } from 'next/router';

const DestinationDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder for fetching destination details using the slug
  const destinationDetails = {
    title: 'Sample Destination',
    description: 'This is a sample destination description.',
    image: '/images/destinations/paris.jpg',
  };

  return (
    <div>
      <section>
        <img src={destinationDetails.image} alt={destinationDetails.title} />
        <h1>{destinationDetails.title}</h1>
        <p>{destinationDetails.description}</p>
      </section>
    </div>
  );
};

export default DestinationDetailsPage;
