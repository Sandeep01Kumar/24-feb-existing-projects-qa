# hello_world

A minimal Node.js HTTP server built with [Express.js](https://expressjs.com/) (v5.x) that serves two endpoints.

## Prerequisites

- [Node.js](https://nodejs.org/) v20.20.0 or compatible (Node.js >= 18 required for Express 5.x)
- npm v11.1.0 or compatible

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

This installs Express.js and all required dependencies.

## Usage

Start the server using either command:

```bash
npm start
```

or

```bash
node server.js
```

The server binds to `http://127.0.0.1:3000/` and is ready to accept requests.

## API Endpoints

| Method | Path       | Response Body      | Status Code |
|--------|------------|--------------------|-------------|
| `GET`  | `/`        | `Hello, World!\n`  | 200         |
| `GET`  | `/evening` | `Good evening`     | 200         |

### Examples

```bash
curl http://127.0.0.1:3000/
# Hello, World!

curl http://127.0.0.1:3000/evening
# Good evening
```

## License

MIT
