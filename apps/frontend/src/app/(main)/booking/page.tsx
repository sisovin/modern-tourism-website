import React from 'react';

const BookingPage = () => {
  return (
    <div>
      <section>
        <h1>Book Your Trip</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="destination">Destination:</label>
            <select id="destination" name="destination" required>
              <option value="paris">Paris</option>
              <option value="new-york">New York</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Travel Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div>
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" required />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </section>
    </div>
  );
};

export default BookingPage;
