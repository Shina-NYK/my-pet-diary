# Project Title

My Pet Diary

## Overview

My Pet Diary is a place where pet lovers can record the memories with pets (and also share memorable moments with others). An online community for all pet lovers.

### Problem

This app provides a place for all pet lovers to upload all their memories

### User Profile

All pet lovers who want an online platform where they can keep all their beloved pet companion

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
    -   NEED TO REVIEW AUTHENTIFICATION: JWT or bcrypt for password hashing

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

#### Home Page/Register Page

![homepage](https://github.com/user-attachments/assets/8128eda7-ff1c-4424-b658-f6752055e2c4)

#### Login Page

![login](https://github.com/user-attachments/assets/c580e233-98ff-4f26-9748-8fdc6fdb1dcf)


### Data

![sql_diagram png](https://github.com/user-attachments/assets/1cd13dd4-31cf-4be7-aae6-4bf1346dcaf5)


### Endpoints

\*\*GET /entries

-   Get list of entries sorted by year
    (expandable list)
-   When the dropdown for the year is clicked, the list will expand to show the total number of entries by month
-   The daily entries can be viewed by further expanding the month dropdown

Parameters:

-   longitude: User-provided location as a number
-   latitude: User-provided location as a number
-   token (optional): JWT used to add "visited" boolean

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

\*\*GET /entries/:id

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

\*\*POST /entries

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

**POST /users/register**

-   Add a user account

Parameters:

-   email: User's email
-   password: User's provided password

Response:

```
{
    "password": "user_password"
}
```

**POST /users/login**

-   Login a user

Parameters:

-   email: User's email
-   password: User's provided password

Response:

```
{
    "password": "user_password"
}
```

### Auth

-   JWT auth
    -   Before adding auth, all API requests will be using a fake user with id 1
    -   Added after core features have first been implemented in sprint 1
    -   Store JWT in databse, remove when a user logs out

## Roadmap

-   Create client

    -   react project with routes and boilerplate pages

-   Create server

    -   express project with routing, with placeholder 200 responses

-   Create migrations

-   Create seeds with mock data for one user

-   Deploy client and server projects so all commits will be reflected in production

-   Feature: List entries by month

    -   Implement list of entries page including a daily entry form on the right of the collapsible entries
    -   Store given location in database
    -   Create GET /entries endpoint

-   Feature: View previous entry

    -   Implement view single entry page
    -   Create GET /entries/:id

-   Feature: Create a new entry

    -   Add form input to view entry page
    -   Create POST /entries

-   Feature: Home page

-   Feature: Create account

    -   Implement register page + form
    -   Create POST /users/register endpoint

-   Feature: Login

    -   Implement login page + form
    -   Create POST /users/login endpoint

-   Feature: Implement JWT tokens

    -   Server: Update expected requests / responses on protected endpoints
    -   Client: Store JWT in local storage, include JWT on axios calls

-   Bug fixes

-   DEMO DAY

## Nice-to-haves

-- Enable camera feature to record epic moments on-the-go for mobile and tablet
-- A community page that features the fun facts about common pet animals where pet lovers can share memorable stories of their pet companion
-- Fetch fun facts about pets from an external API
-- Account authentification using JWT
