# User Management API

This is an Express-based API for managing user accounts, authentication, profile information, and more. It includes features such as user registration, login, password changes, updating user details, and handling user avatars and cover images.

## Features

- **User Registration**: Register a new user with avatar and cover image upload.
- **User Login**: Authenticate a user and issue a JWT token.
- **Logout**: Invalidate the user's session.
- **Refresh Token**: Refresh an access token using a refresh token.
- **Change Password**: Change the current user's password.
- **Get Current User**: Retrieve details about the currently logged-in user.
- **Update User Details**: Update the account details of the authenticated user.
- **Update Avatar**: Update the avatar image of the user.
- **Update Cover Image**: Update the cover image of the user.
- **Get User Channel Profile**: Retrieve the profile of a user's channel by username.
- **Get Watch History**: Retrieve the user's watch history.

## API Endpoints

### User Registration

- **URL**: `/register`
- **Method**: `POST`
- **Description**: Register a new user with an avatar and cover image.
- **Request**: 
  - `avatar` (file): Optional image file for user's avatar.
  - `coverImage` (file): Optional image file for user's cover image.
  - Other form fields for registration (username, password, etc.)

### User Login

- **URL**: `/login`
- **Method**: `POST`
- **Description**: Log in a user with their credentials and issue a JWT token.
  
### User Logout

- **URL**: `/logout`
- **Method**: `POST`
- **Authentication**: Requires JWT token.
- **Description**: Log out the currently authenticated user.

### Refresh Access Token

- **URL**: `/refreshToken`
- **Method**: `POST`
- **Description**: Refresh the access token using a valid refresh token.

### Change Password

- **URL**: `/changePassword`
- **Method**: `POST`
- **Authentication**: Requires JWT token.
- **Description**: Change the current password of the authenticated user.

### Get Current User

- **URL**: `/currentUser`
- **Method**: `GET`
- **Authentication**: Requires JWT token.
- **Description**: Get the details of the currently authenticated user.

### Update User Details

- **URL**: `/updateDetails`
- **Method**: `PATCH`
- **Authentication**: Requires JWT token.
- **Description**: Update the account details (name, email, etc.) of the current user.

### Update Avatar

- **URL**: `/avatar`
- **Method**: `PATCH`
- **Authentication**: Requires JWT token.
- **Description**: Update the avatar image of the authenticated user.
- **Request**: 
  - `avatar` (file): The new avatar image file.

### Update Cover Image

- **URL**: `/coverImage`
- **Method**: `PATCH`
- **Authentication**: Requires JWT token.
- **Description**: Update the cover image of the authenticated user.
- **Request**: 
  - `coverImage` (file): The new cover image file.

### Get User Channel Profile

- **URL**: `/c/:username`
- **Method**: `GET`
- **Authentication**: Requires JWT token.
- **Description**: Get the profile of a user's channel by their username.

### Get Watch History

- **URL**: `/history`
- **Method**: `GET`
- **Authentication**: Requires JWT token.
- **Description**: Retrieve the watch history of the current user.

## Middlewares

- **`upload`**: Handles file uploads (avatar, cover image) using `multer`.
- **`verifyJWT`**: Middleware to verify JWT tokens for protected routes.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your `.env` file with your environment variables (JWT secret, etc.).
4. Run `npm start` to start the server.

---
