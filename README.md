# URL Shortener API

This is a URL Shortener API built with Node.js, Express, and MongoDB. It allows users to generate short URLs and track the analytics of the shortened URLs.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Sample Requests/Responses](#sample-requestsresponses)
- [Deployed URL](#deployed-url)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Laxmikant2002/url-shortener-api
    cd url-shortener-api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Make sure you have MongoDB running on your local machine or update the MongoDB connection string in [index.js](http://_vscodecontentref_/0) to point to your MongoDB instance.

## Running the Application

Start the application using the following command:
```sh
npm start

The server will start on port `8001`.

## API Endpoints

### Generate Short URL

- **URL:** `/url`
- **Method:** `POST`
- **Request Body:**
- **Response:**
    ```json
    {
        "id": "shortId"
    }
    ```

### Get URL Analytics

- **URL:** `/url/analytics/:shortId`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "totalClicks": 5,
        "analytics": [
            { "timestamp": 1633024800000 },
            { "timestamp": 1633028400000 }
        ]
    }
    ```

### Redirect to Original URL

- **URL:** `/:shortId`
- **Method:** `GET`
- **Response:** Redirects to the original URL.

## Sample Requests/Responses

### Generate Short URL

**Request:**
```sh
curl -X POST http://localhost:8001/url -H "Content-Type: application/json" -d '{"url": "https://example.com"}'
```

**Response:**
```json
{
    "id": "shortId"
}
```

### Get URL Analytics

**Request:**
```sh
curl http://localhost:8001/url/analytics/shortId
```

**Response:**
```json
{
    "totalClicks": 5,
    "analytics": [
        { "timestamp": 1633024800000 },
        { "timestamp": 1633028400000 }
    ]
}
```
