# Bookmark Manager

## Overview

Welcome to **Bookmark Manager**, a web application designed to help users manage their bookmarks efficiently. Built using the MERNG (MongoDB, Express.js, React.js, Node.js, GraphQL) stack, this application allows users to create, save, and retrieve their favorite web links easily.

## Features

- **User Authentication**: Secure login and registration using JWT authentication.
- **Bookmark Management**: Add, display, edit and delete bookmarks for the logged-in user.
- **Search Functionality**: Quickly find bookmarks using search filters.
- **Minimalist UI**: Simple and easy to use UI using Semantic UI.

## Tech Stack

- **Frontend**: React.js, Context API, Semantic UI, Apollo Client
- **Backend**: Node.js, Express.js, Apollo Server
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **API**: GraphQL

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account (will need to configure in config.js file in upcoming steps)
- Git

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prhks/bookmark-manager.git
   cd bookmark-manager
   git checkout develop (don't use master)
   ```
2. **Install backend dependencies**:
   ```bash
   npm install
   ```
3. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   ```
4. **Set up config.js file under root directory for MongoDB Atlas authentication and JWT secret key**:

   Create a config,js file in the root directory.
   Add the following variables:

   ```javascript
   module.exports = {
     MONGODB:
       "mongodb+srv://<your_username>:<your_password>@cluster0.rw6st.mongodb.net/<mongodb_database_name>?retryWrites=true",
     SECRET_KEY: "<any_secret_key_of_your_choice>",
   };
   ```

5. _Run the application on your local machine_:

   ```bash
   # Run backend server
   npm start

   # Run frontend server
   cd client
   npm start
   ```

6. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. But make sure server port is configured correctly.

### API Endpoints

    ### GraphQL API

- **Endpoint:** `/graphql`

#### Queries

- **Get All Bookmarks** (requires authentication, i.e., Authorization token for logged-in user):

  ```graphql
  query GetBookmarks {
    getBookmarks {
      id
      image
      url
      title
      description
      createdAt
      username
    }
  }
  ```
 - **Get a Single Bookmark** (requires authentication, i.e., Authorization token for logged-in user):

  ```graphql
  query GetBookmark($bookmarkId: ID!) {
    getBookmark(bookmarkId: $bookmarkId) {
      id
      image
      url
      title
      description
      createdAt
      username
    }
  }
  ```
- **Search Bookmarks** (requires authentication, i.e., Authorization token for logged-in user):

  ```graphql
  query SearchBookmarks($query: String!) {
    searchBookmarks(query: $query) {
      id
      image
      url
      title
      description
      createdAt
      username
    }
  }
  ```
#### Mutations

  - **Register a New User** (username must be unique):

  ```graphql
  mutation RegisterUser($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      id
      email
      token
      username
      createdAt
    }
  }
  ```
  - **Log In a User** :

  ```graphql
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      token
      username
      createdAt
    }
  }
  ```
  - **Create a New Bookmark** (requires authentication, i.e., Authorization token for logged-in user):

  ```graphql
  mutation CreateBookmark($url: String!) {
    createBookmark(url: $url) {
      id
      image
      url
      title
      description
      createdAt
      username
    }
  }
  ```
  - **Delete a Bookmark** (requires authentication, i.e., Authorization token for logged-in user):

  ```graphql
  mutation DeleteBookmark($bookmarkId: ID!) {
    deleteBookmark(bookmarkId: $bookmarkId)
  }
  ``` 

   

### Usage of Application

- **Home Page** (Here you have option to login/register for the application at the top right)

    ![image](https://github.com/user-attachments/assets/6fd96a5c-a81e-4de5-9bd4-298cc2773334)

- **Register Page** (Register your profile here with unique username and valid details)

    ![image](https://github.com/user-attachments/assets/be5b717a-efd6-44ef-9693-0a0aa16caf10)

- **Login Page** (Login, if you are already registered)

    ![image](https://github.com/user-attachments/assets/e7c9003f-dc04-4ec9-9f43-a8412cc31a19)

- **Your Dashboard Page** (Create/search/Access all your bookmarks from here)

   ![image](https://github.com/user-attachments/assets/2a3b8c95-3d13-4574-b592-97f785d9b6dd)

 - **Search and Delete Bookmark** (You can search your favourite bookmark or delete the unused ones to clean up things)

    ![image](https://github.com/user-attachments/assets/56f65681-22b6-4228-8032-7aa1de3d71d7)

   ![image](https://github.com/user-attachments/assets/f2235c1c-c68e-4ad7-b85c-b2edc19cdd09)


### Deployment and Live link

  - Frontend deployed on Netlify
  - Backend deployed on Heroku
  - Live Link : https://master--imaginative-boba-a56650.netlify.app/






