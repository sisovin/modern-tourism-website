import React from 'react';

const GalleryPage = () => {
  return (
    <div>
      <section>
        <h1>Gallery</h1>
        <div className="gallery-grid">
          <img src="/images/destinations/paris.jpg" alt="Paris" />
          <img src="/images/destinations/new-york.jpg" alt="New York" />
          <img src="/images/tours/tour-1.jpg" alt="Tour 1" />
          <img src="/images/tours/tour-2.jpg" alt="Tour 2" />
          <img src="/images/testimonials/user1.jpg" alt="User 1" />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
