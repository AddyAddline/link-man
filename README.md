# Link Man - Custom URL Protector

Link Man is a web application that allows users to create custom protected URLs for their favorite websites. Users can input the URL of the target website and set a password. Link Man will then generate a custom URL that, when accessed, prompts the user to enter the password they set. If the correct password is entered, the original website is unlocked and displayed.

## Features

- **Custom Protected URLs:** Create unique custom URLs for any website you want to protect.

- **Password Protection:** Set a password for each custom URL to ensure only authorized users can access the original website.

- **User-Friendly Interface:** A simple and intuitive interface makes it easy for users to create and access their custom protected URLs.

# Technology Stack

- **Frontend:** Vite, React

- **Backend:** Node.js, Express.js

- **Database:** MongoDB

## Table of Contents

1. [Getting Started](#getting-started)
   - [Backend Setup (Link Man API)](#backend-setup-link-man-api)
   - [Frontend Setup (Link Man Frontend)](#frontend-setup-link-man)
2. [License](#license)

## Getting Started

To run Link Man locally, follow these steps:

### Backend Setup (Link Man API)

1. **Clone the Link Man API repository** from [link-man-api](https://github.com/AddyAddline/link-man-api):

   ```bash
   git clone https://github.com/AddyAddline/link-man-api.git
   ```
2.  **Navigate to the API project directory:**
    ```bash
    cd link-man-api
    ```
    
3. **Create a .env file in the root directory of the API project with the following content:**

    ```env
   MONGO_URI=YOUR_MONGODB_CONNECTION_URL
    ```

Replace ***YOUR_MONGODB_CONNECTION_URL*** with your MongoDB connection URL (could be a cloud-based or local MongoDB instance).


4.  **Install the project dependencies:**
    ```bash
    npm install
    ```

5.  **Start the backend server:**
    ```bash
    node index.js
    ```
The backend server is now up and running.
### Frontend Setup (Link Man)

1. **Clone the Link Man Frontend repository from** from [link-man](https://github.com/AddyAddline/link-man):

   ```bash
   git clone https://github.com/AddyAddline/link-man.git
   ```
2. **Navigate to the Frontend project directory:**
    ```bash
    cd link-man
    ```
    
3. **Create a .env file** in the root directory of the Frontend project with the following content:
    ```env
    VITE_API_URL=http://localhost:YOUR_API_PORT
    ```
Replace ***YOUR_API_PORT*** with the port on which the Link Man API is running locally (e.g., 3000).


    
4.  **Install the project dependencies:**
    ```bash
    npm install
    ```
5.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
## License
This project is open-source and released under the MIT License. You can find the full license text in the LICENSE.md file.
    

