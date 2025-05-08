# Modern Tourism Website

Welcome to the **Modern Tourism Website** repository! This project is a modern, responsive, and feature-rich web application built using Next.js and Django. It showcases an elegant design for tourism-related businesses, featuring key functionalities such as authentication, a dynamic database schema, and SEO optimization.

## Key Features

- **All Pages from the Original Template**: Includes Home, About, Services, Packages, Contact, and more.
- **Organized Components**: Well-structured React components for each section, ensuring maintainability and reusability.
- **TypeScript Support**: Leverages TypeScript for better type safety and developer experience in Next.js.
- **Django Backend**: A robust backend with Django, featuring proper models for data management.
- **Authentication System**: Secure user authentication built into the application.
- **Database Schema with Prisma**: Prisma ORM for managing the database schema and queries efficiently.
- **SEO Optimization**: Optimized for search engines to improve visibility and rankings.
- **Responsive Design**: Designed with Tailwind CSS to ensure a seamless user experience across all devices.

---

## Installation

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v18 or later)
- Python (3.9 or later)
- PostgreSQL (or any database supported by Prisma)
- npm or yarn (for JavaScript package management)
- pip (Python package manager)

---

## Frontend Setup: Next.js (v15.3.1)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sisovin/modern-tourism-website.git
   cd modern-tourism-website
   ```

2. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Install Next.js (v15.3.1):**

   Next.js should already be included in the project, but to ensure compatibility, you can install the specified version:

   ```bash
   npm install next@15.3.1 react react-dom
   ```

5. **Run the Development Server:**

   ```bash
   npm run dev
   ```

6. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000`.

---

## Backend Setup: Django

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Set Up a Virtual Environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate     # For Windows
   ```

3. **Install Django:**

   ```bash
   pip install django
   ```

4. **Install Additional Dependencies:**

   Ensure that `djangorestframework` and other required packages are installed:

   ```bash
   pip install djangorestframework
   ```

5. **Run Database Migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Run the Django Development Server:**

   ```bash
   python manage.py runserver
   ```

7. **Access the Backend:**

   Open your browser and navigate to `http://localhost:8000`.

---

## Database Schema with Prisma

1. **Install Prisma CLI Globally:**

   ```bash
   npm install -g prisma
   ```

2. **Initialize Prisma in the Project:**

   Navigate to the backend directory and initialize Prisma:

   ```bash
   cd backend
   prisma init
   ```

3. **Set Up the Database:**

   Update the `prisma/schema.prisma` file to reflect your database schema. Run the following commands to generate the database and client:

   ```bash
   prisma migrate dev --name init
   prisma generate
   ```

4. **Connect Prisma to Django:**

   Update your Django settings to integrate Prisma with the ORM.

---

## Style and Design: Tailwind CSS

1. **Install Tailwind CSS:**

   In the frontend directory, install Tailwind CSS and its dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. **Configure Tailwind:**

   Update the `tailwind.config.js` file to include the paths to your components:

   ```javascript
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Include Tailwind in Your CSS:**

   Add the following lines to your `styles/globals.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Authentication System

The project includes a secure authentication system:
- Registration and Login pages for users.
- JWT-based authentication for secure API communication.
- Password hashing and validation integrated with Django.

---

## SEO Optimization

SEO is implemented using Next.js features:
- Dynamic metadata for pages.
- Sitemap generation.
- Optimized images for faster loading.

---

## Responsive Design

The website is fully responsive, ensuring it works seamlessly on devices of all sizes, from mobile phones to desktops. Tailwind CSS makes it easy to maintain a consistent design system.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or support, feel free to reach out to the repository owner!

Enjoy building your modern tourism website! 🌍✨

--- 

Let me know if you need any adjustments!Here’s a comprehensive `README.md` file for the **Modern Tourism Website**:

---

# Modern Tourism Website

Welcome to the **Modern Tourism Website** repository! This project is a modern, responsive, and feature-rich web application built using Next.js and Django. It showcases an elegant design for tourism-related businesses, featuring key functionalities such as authentication, a dynamic database schema, and SEO optimization.

## Key Features

- **All Pages from the Original Template**: Includes Home, About, Services, Packages, Contact, and more.
- **Organized Components**: Well-structured React components for each section, ensuring maintainability and reusability.
- **TypeScript Support**: Leverages TypeScript for better type safety and developer experience in Next.js.
- **Django Backend**: A robust backend with Django, featuring proper models for data management.
- **Authentication System**: Secure user authentication built into the application.
- **Database Schema with Prisma**: Prisma ORM for managing the database schema and queries efficiently.
- **SEO Optimization**: Optimized for search engines to improve visibility and rankings.
- **Responsive Design**: Designed with Tailwind CSS to ensure a seamless user experience across all devices.

---

## Installation

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v18 or later)
- Python (3.9 or later)
- PostgreSQL (or any database supported by Prisma)
- npm or yarn (for JavaScript package management)
- pip (Python package manager)

---

## Frontend Setup: Next.js (v15.3.1)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sisovin/modern-tourism-website.git
   cd modern-tourism-website
   ```

2. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Install Next.js (v15.3.1):**

   Next.js should already be included in the project, but to ensure compatibility, you can install the specified version:

   ```bash
   npm install next@15.3.1 react react-dom
   ```

5. **Run the Development Server:**

   ```bash
   npm run dev
   ```

6. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000`.

---

## Backend Setup: Django

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Set Up a Virtual Environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate     # For Windows
   ```

3. **Install Django:**

   ```bash
   pip install django
   ```

4. **Install Additional Dependencies:**

   Ensure that `djangorestframework` and other required packages are installed:

   ```bash
   pip install djangorestframework
   ```

5. **Run Database Migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Run the Django Development Server:**

   ```bash
   python manage.py runserver
   ```

7. **Access the Backend:**

   Open your browser and navigate to `http://localhost:8000`.

---

## Database Schema with Prisma

1. **Install Prisma CLI Globally:**

   ```bash
   npm install -g prisma
   ```

2. **Initialize Prisma in the Project:**

   Navigate to the backend directory and initialize Prisma:

   ```bash
   cd backend
   prisma init
   ```

3. **Set Up the Database:**

   Update the `prisma/schema.prisma` file to reflect your database schema. Run the following commands to generate the database and client:

   ```bash
   prisma migrate dev --name init
   prisma generate
   ```

4. **Connect Prisma to Django:**

   Update your Django settings to integrate Prisma with the ORM.

---

## Style and Design: Tailwind CSS

1. **Install Tailwind CSS:**

   In the frontend directory, install Tailwind CSS and its dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. **Configure Tailwind:**

   Update the `tailwind.config.js` file to include the paths to your components:

   ```javascript
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Include Tailwind in Your CSS:**

   Add the following lines to your `styles/globals.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Authentication System

The project includes a secure authentication system:
- Registration and Login pages for users.
- JWT-based authentication for secure API communication.
- Password hashing and validation integrated with Django.

---

## SEO Optimization

SEO is implemented using Next.js features:
- Dynamic metadata for pages.
- Sitemap generation.
- Optimized images for faster loading.

---

## Responsive Design

The website is fully responsive, ensuring it works seamlessly on devices of all sizes, from mobile phones to desktops. Tailwind CSS makes it easy to maintain a consistent design system.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or support, feel free to reach out to the repository owner!

Enjoy building your modern tourism website! 🌍✨
