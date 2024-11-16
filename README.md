# Contact Management Application

This is a contact management application that allows users to manage their contacts. It consists of two parts: the **Frontend** and the **Backend**. The frontend is built using ReactJS and Material UI, and the backend is built with Node.js, Express, and MongoDB.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Installation](#installation)
3. [Frontend Setup](#frontend-setup)
4. [Backend Setup](#backend-setup)
5. [Usage](#usage)
6. [Environment Variables](#environment-variables)
7. [License](#license)

## Tech Stack

- **Frontend**: React, Material UI, Vite
- **Backend**: Node.js, Express, MongoDB
- **Other Tools**:
  - ESLint for linting
  - Vite for bundling the frontend

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/contact-management.git
cd contact-management
```

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables. Create a `.env` file in the `backend` folder and add the following variables:

```bash
MONGO_URI=your_mongo_connection_string
```

You can replace `your_mongo_connection_string` with your MongoDB connection string. If you are using MongoDB Atlas, you can get it from your MongoDB Atlas dashboard.

4. Start the backend server:

```bash
npm start
```

The backend should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm run dev
```

The frontend should now be running on `http://localhost:3000`.

### Connecting Frontend and Backend

Ensure that the frontend is correctly communicating with the backend. The frontend should make API requests to `http://localhost:5000`. You can adjust the API URL in your frontend code (usually in `src/api.js` or similar file) if needed.

## Usage

1. On the frontend, you can add, edit, delete, and view contacts.
2. The backend handles the CRUD operations using Express and MongoDB.

## Environment Variables

### Backend

The backend requires the following environment variables in the `.env` file:

- **MONGO_URI**: The MongoDB connection string.

### Frontend

The frontend does not require specific environment variables but can be configured to communicate with a different backend URL by modifying the API URL in the frontend code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
