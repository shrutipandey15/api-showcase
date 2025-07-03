# Public API Showcase

Welcome to the Public API Showcase, an interactive web application designed to help developers discover, test, and rate a curated collection of public APIs. This project provides a beautiful, modern interface to explore over 150+ free APIs that do not require authentication, making them perfect for your next hackathon or side project.

The application features dynamic, real-time ratings powered by Firebase and a persistent bookmarking system using browser `localStorage`.

## Features

- **Massive API Collection:** Explore a list of over 150+ hand-picked, no-auth public APIs.
- **Dynamic Real-time Ratings:** Rate your favorite APIs. All ratings are stored in a Firebase Firestore database and are updated in real-time for all users.
- **Live API Testing:** Test any API directly from the browser with a single click. A modal displays the live response, endpoint details, and sample data.
- **Persistent Bookmarking:** Bookmark your favorite APIs. Your choices are saved in your browser's `localStorage` and will persist across sessions.
- **Advanced Filtering & Searching:**
    - Instantly search APIs by name or description.
    - Filter the list by category.
    - View a dedicated list of your bookmarked APIs.
- **Modern & Responsive UI:** Built with Tailwind CSS, the interface is fully responsive and includes smooth animations and a visually appealing "glassmorphism" design.
- **Dashboard Stats:** See live statistics, including the total number of APIs, the average user rating across all APIs, the total number of ratings submitted, and your personal bookmark count.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/api-showcase.git](https://github.com/your-username/api-showcase.git)
    cd api-showcase
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up Firebase:**
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Add a new Web App to your project to get your Firebase configuration keys.
    - Create a Firestore Database and start it in **Test Mode**.
    - Create a collection named `ratings`.

4.  **Create Environment Variables:**
    - In the root of your project, create a new file named `.env.local`.
    - Copy your Firebase web app configuration keys into this file:
      ```
      VITE_API_KEY=YOUR_API_KEY
      VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
      VITE_PROJECT_ID=YOUR_PROJECT_ID
      VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
      VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
      VITE_APP_ID=YOUR_APP_ID
      ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the URL provided in your terminal) to view the application in your browser.

## Technology Stack

- **Frontend:** [React](https://reactjs.org/) (with Hooks and Functional Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with custom classes and animations)
- **Real-time Database:** [Google Firestore](https://firebase.google.com/docs/firestore)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## How to Use

- **Browse APIs:** Scroll through the grid to see all the available APIs.
- **Search & Filter:** Use the search bar and the category dropdown in the header to narrow down the list.
- **Rate an API:** Click on the stars on any API card to submit your rating. The average rating will update in real-time.
- **Bookmark an API:** Click the bookmark icon on the top-right of any card. The icon will fill in, and the API will be added to your personal list.
- **View Bookmarks:** Click the "My Bookmarks" button in the header to see only the APIs you've saved.
- **Test an API:** Click the "Test API" button on a card to open a modal. Inside the modal, click "Test API Call" to see a live response from the API endpoint.

## Project Structure

The project is organized into a clean and maintainable structure:

/src

├── components/

├── data/

├── App.jsx

├── App.css

├── firebase.js

└── main.jsx

---

Happy coding!
