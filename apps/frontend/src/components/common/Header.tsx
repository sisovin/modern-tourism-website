import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Travel Agency</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/packages">
                <a>Packages</a>
              </Link>
            </li>
            <li>
              <Link href="/destinations">
                <a>Destinations</a>
              </Link>
            </li>
            <li>
              <Link href="/tours">
                <a>Tours</a>
              </Link>
            </li>
            <li>
              <Link href="/booking">
                <a>Booking</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <a>Testimonials</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
