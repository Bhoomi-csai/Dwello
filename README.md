# Dwello

Dwello is a modern real estate web application that helps users discover, search, and explore property listings with ease. Built with React, Firebase Authentication, and styled using CSS, Dwello offers a seamless and responsive user experience.

## Features
- User authentication (Email/Password & Google via Firebase)
- Browse and search property listings
- Filter properties by city, type, and price
- Responsive design for all devices
- Clean, modern UI with Tailwind CSS

## Tech Stack
- **Frontend:** React, React Router, Vite
- **Authentication:** Firebase Auth
- **Styling:** CSS
- **APIs:** Public property listing datasets

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Dwello/Dwello
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
Dwello/
  Dwello/
    src/
      components/    # Reusable UI components (Navbar, Footer, Login, Register, etc.)
      pages/         # Main pages (Home, About, Services, Contact, Listing)
      assets/        # Static assets (images, icons)
      firebase.js    # Firebase configuration
    public/          # Static public files
    tailwind.config.js
    vite.config.js
    package.json
```

## Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Email/Password and Google authentication.
3. Replace the config in `src/firebase.js` with your Firebase credentials.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## License
This project is licensed under the MIT License.
