import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'User 1',
    image: '/images/testimonials/user1.jpg',
    text: 'Testimonial 1',
  },
  {
    id: 2,
    name: 'User 2',
    image: '/images/testimonials/user2.jpg',
    text: 'Testimonial 2',
  },
  {
    id: 3,
    name: 'User 3',
    image: '/images/testimonials/user3.jpg',
    text: 'Testimonial 3',
  },
];

const Testimonials = () => {
  return (
    <section>
      <h2>Customer Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
