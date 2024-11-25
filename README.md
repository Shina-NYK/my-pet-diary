# Project Title

My Pet Diary

## Overview

My Pet Diary is an app designed for pet lovers who enjoy capturing and cherishing their memories in a journal-style format.

### Problem

My Pet Diary provides a place for all pet lovers to upload all of the precious moments with their pets in one place.

### User Profile

All pet lovers who want an online platform where they can keep all their beloved pet companions and who like journalling.

### Features

-   As a user, I want to be able to create an account
-   As a logged in user, I want to view my entries sorted by year and month
-   As a logged in user, I want to post new entries about my pet
-   As a logged in user, I want to delete any previous entries

## Implementation

### Tech Stack

-   React
-   MySQL
-   Express
-   Client libraries:
    -   react
    -   react-router
    -   axios
-   Server libraries:
    -   knex
    -   express

### APIs

-   No external APIs will be used for the first sprint

### Sitemap

-   User Home page
-   List of entries by year
-   List of entries by month
-   View individual entry details
-   Register
-   Login

### Mockups

### User Home Page

![user-homepage](https://github.com/user-attachments/assets/786bf795-dd43-4f3b-a066-3b67b426d324)

### Entries sorted by month

![entries sorted by month](https://github.com/user-attachments/assets/bfb8d6b8-02a0-4f6a-bf5a-5f4e0ce9cd71)

### Vew a single existing entry

![view existing individual entry](https://github.com/user-attachments/assets/013abc9e-e965-43d2-9cf0-a8e65f9e17b6)

### Data

![proof of concept_mysql table](https://github.com/user-attachments/assets/04e21826-e71f-47ad-81e9-52e84e15c2dc)

### Endpoints

\*\*GET /entries

-   Get list of entries sorted by year
    (expandable list)
-   When the dropdown for the year is clicked, the list will expand to show the entries by month
-   the user can also add a new entry from this page
-   The individual entries can be viewed by further expanding the month dropdown

Response:

```
{
  "2023": {
    "January": [
      { "id": 1, "Spot" , "title": "Walk in the Park", "date": "2023-01-15", "content": "It was sunny." },
      { "id": 2, "Spot", "title": "Vet Visit", "date": "2023-01-20", "content": "Routine check-up." }
    ],
    "February": [
      { "id": 3, "Spot", "title": "Snowy Day", "date": "2023-02-05", "content": "Played in the snow." }
    ]
  },
  ...
}
```

\*\*POST /year/month

-   Logged in user can add new entries

Parameters:

-   id: entry id
-   pet_name: pet's name (optional)
-   date: entry date
-   entry_title: entry title
-   content: entry description

Response:

```
{
    "id": 1,
    "pet_name": "Spot",
    "date": "2023-01-15",
    "title": "Walk in the Park",
    "content": "It was sunny."
}
```

\*\*GET /year/month/:id

-   Get individual entry by id to view the details

Parameters:

-   id: entry id as number

Response:

```
{
    "id": 1,
    "pet_name": "Spot"
    "title": "Walk in the Park",
    "date": "2023-01-15",
    "content": "It was sunny."
}
```

## Roadmap

-   Create client

    -   react project with routes and boilerplate pages

-   Create server

    -   express project with routing, with placeholder 200 responses

-   Create migrations

-   Create seeds with mock data for one user

-   Deploy client and server projects so all commits will be reflected in production

-   Feature: List entries by year

    -   Implement list of entries page including a daily entry form on the right of the collapsible entries
    -   Create GET /entries endpoint

-   Feature: View entries sorted by month

    -   Implement view entries by month page
    -   Create GET /year/month

-   Feature: View single entry

    -   Implement view of a single entry
    -   Create GET /year/month/:id

-   Feature: Create a new entry

    -   Add form input to view entry page
    -   Create POST /year/month

-   Bug fixes

-   DEMO DAY

## Nice-to-haves

### Addition to Sitemap

-   Register/Main website page
-   Login

### Auth

-   JWT auth
    -   Before adding auth, all API requests will be using a fake user with id 1
    -   Added after core features have first been implemented in sprint 1
    -   Store JWT in databse, remove when a user logs out

#### Main Website Page/Register Page

![homepage](https://github.com/user-attachments/assets/8128eda7-ff1c-4424-b658-f6752055e2c4)

#### Login Page

![login](https://github.com/user-attachments/assets/c580e233-98ff-4f26-9748-8fdc6fdb1dcf)

**POST /users/register**

-   Add a user account

Parameters:

-   email: User's email
-   password: JWT token

Response:

```
{
    "password": "JWT token"
}
```

**POST /users/login**

-   Login a user

Parameters:

-   email: User's email
-   password: JWT token

Response:

```
{
    "password": "JWT token"
}
```

### Addition to Roadmap

-   Feature: Main Website page

-   Feature: Create account

    -   Implement register page + form
    -   Create POST /users/register endpoint

-   Feature: Login

    -   Implement login page + form
    -   Create POST /users/login endpoint

-   Feature: Implement JWT tokens

    -   Server: Update expected requests / responses on protected endpoints
    -   Client: Store JWT in local storage, include JWT on axios calls

-   Add images/videos
-   A community page that features the fun facts about common pet animals where pet lovers can share memorable stories of their pet companion on the website's main/registration page
-   Fetch fun facts about pets from an external API to display on the website's main page
