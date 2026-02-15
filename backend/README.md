## Backend API (Express + MongoDB)

This folder contains the Node.js backend for the Event Booking System. It exposes REST APIs for authentication and bookings and uses MongoDB as the database.

### 1. Environment variables

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=some-long-random-secret
PORT=5000
```

- **MONGO_URI**: Use the MongoDB Atlas URL you provided.
- **JWT_SECRET**: Any long random string, used to sign auth tokens.
- **PORT**: Optional. Defaults to `5000` if not set.

### 2. Install dependencies

From the `backend` folder:

```bash
npm install
```

(This was already run once when the backend was created, but you can run it again if needed.)

### 3. Run the backend

From the `backend` folder:

```bash
npm run dev
```

The API will be available at `http://localhost:5000/api`.

Key routes:

- `POST /api/auth/signup` – create user account
- `POST /api/auth/login` – log in and get JWT
- `GET /api/auth/me` – get current user profile
- `POST /api/bookings` – create a booking (authenticated)
- `GET /api/bookings/me` – list current user's bookings

### 4. Frontend configuration

The frontend expects the API base URL in `VITE_API_BASE_URL`. In `frontend/.env` (create if needed):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Then start the frontend as usual from the `frontend` folder:

```bash
npm run dev
```

