import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section>
        <img src="/images/hero-bg.jpg" alt="Hero Banner" />
        <h1>Welcome to Our Travel Agency</h1>
        <p>Explore the world with us!</p>
      </section>

      <section>
        <h2>Popular Tourist Destinations</h2>
        <ul>
          <li>Destination 1</li>
          <li>Destination 2</li>
          <li>Destination 3</li>
        </ul>
      </section>

      <section>
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
      </section>

      <section>
        <h2>Customer Testimonials</h2>
        <ul>
          <li>"Testimonial 1"</li>
          <li>"Testimonial 2"</li>
          <li>"Testimonial 3"</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
