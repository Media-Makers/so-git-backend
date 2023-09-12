# SoGit Backend

![SoGit Logo](/images/SoGit3.png)

The SoGit backend is responsible for managing news articles, handling user comments, and interacting with external APIs to fetch technology news articles related to JavaScript.

## Contributors

- Justine Oyaghiro
- Bianca Chery
- Andrea Malone
- Ajamu Page

## Overview

The SoGit backend is built using Node.js, Express.js, and MongoDB. It serves as the data provider for the SoGit frontend, offering endpoints for news articles, comments, and more.

## Endpoints

### 1. `/technology-news` (GET)

- **Description:** Fetches technology news articles related to JavaScript.
- **Usage:** Used by the frontend to display technology news articles.
- **Endpoint:** `/technology-news`
- **Response Format:** JSON

### 2. `/news` (GET)

- **Description:** Fetches stored news articles from the database or, if none are available, fetches them from an external news API.
- **Usage:** Used by the frontend to display news articles.
- **Endpoint:** `/news`
- **Response Format:** JSON

### 3. `/comments/:id` (PATCH)

- **Description:** Adds a new comment to a news article by its ID.
- **Usage:** Used when a user adds a comment to an article.
- **Endpoint:** `/comments/:id`
- **Request Format:** JSON
- **Response Format:** JSON

## Getting Started

To set up the SoGit backend on your local machine, follow these steps:

### Prerequisites

Before you begin, ensure that you have the following software and environment variables set up:

- **Node.js:** You'll need Node.js to run the backend server.
  - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

- **MongoDB:** You'll need a MongoDB database to store news articles and comments.
  - Set up a MongoDB database and configure the connection in your environment variables.

- **Environment Variables:** Create a `.env` file in the project root directory with the following variables:

