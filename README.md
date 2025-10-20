# Dynamic Profile Endpoint

This project is part of the **Backend Internship (Stage 0)** task.  
It’s a simple RESTful API endpoint that returns my profile information along with a **random cat fact** fetched from the external [Cat Facts API](https://catfact.ninja/fact).


## Project Overview

The goal is to create a dynamic `/me` endpoint that:
- Returns JSON data with **Content-Type: `application/json`**
- Integrates with the **Cat Facts API** to fetch a random cat fact on each request
- Includes my **email, full name, and backend stack**
- Adds a **dynamic timestamp** (UTC, ISO 8601 format)
- Handles errors gracefully (fallback message if API is down)


## Tech Stack

- **Node.js**
- **Express.js**
- **Axios** — for fetching the external cat facts API  
- **Dotenv** — for managing environment variables  
- **Morgan** — for logging HTTP requests  
- **Nodemon** — for development hot reload  
- **Jest & Supertest** — for automated testing  


## Setup Instructions (Run Locally)

Follow these easy steps:

### Clone the Repository
```bash
git clone https://github.com/sochimahenri/HNG-Backend-stage-0.git



