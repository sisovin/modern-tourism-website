import React from 'react';

const ToursByCategoryPage = ({ category }) => {
  return (
    <div>
      <section>
        <h1>Tours in {category}</h1>
        <p>Explore our exciting tours and adventures in {category}!</p>
      </section>

      <section>
        <h2>Available Tours</h2>
        <ul>
          <li>Tour 1</li>
          <li>Tour 2</li>
          <li>Tour 3</li>
        </ul>
      </section>
    </div>
  );
};

export default ToursByCategoryPage;
