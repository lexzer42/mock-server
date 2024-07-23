# Mock Server with Vite and Express

This project sets up a mock server using Vite and Express to handle login requests and store received data.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/lexzer42/mock-server.git
    cd mock-server
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Usage

### Running the Mock Server

To start the mock server, run:

```sh
npm run mock
```

The server will be listening at [http://localhost:3000](http://localhost:3000).

### Endpoints

- **POST /login**

    Endpoint to receive login data.

    **Request body:**
    ```json
    {
        "a": "user@example.com",
        "az": "password123"
    }
    ```

    **Response:**
    ```text
    OK
    ```

- **GET /data**

    Endpoint to retrieve the stored login data.

    **Response:**
    ```json
    [
        {
            "email": "user@example.com",
            "password": "password123"
        }
    ]
    ```

## Scripts

- **dev:** Starts the Vite development server.
- **build:** Builds the Vite project.
- **serve:** Previews the built Vite project.
- **mock:** Starts the Express mock server.

## Dependencies

- **express:** ^4.17.1
