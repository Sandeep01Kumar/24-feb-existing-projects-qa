/**
 * @file HTTP Hello World server for Backprop integration testing.
 * @module server
 * @author hxu
 * @license MIT
 * @description A minimal Node.js HTTP server that responds to every request with
 * "Hello, World!" on port 3000. This module serves as a test fixture for Backprop
 * integration validation.
 */
const http = require('http');

/**
 * @const {string} hostname
 * @default '127.0.0.1'
 * @description The IP address the server binds to. Set to localhost (127.0.0.1),
 * restricting access to the local machine only.
 */
const hostname = '127.0.0.1';

/**
 * @const {number} port
 * @default 3000
 * @description The TCP port number the server listens on.
 */
const port = 3000;

/**
 * @const {http.Server} server
 * @description HTTP server instance created by {@link http.createServer}. Responds to all
 * incoming requests with a 200 OK status, a Content-Type of text/plain, and the body
 * "Hello, World!\n".
 * @param {http.IncomingMessage} req - The incoming HTTP request object.
 * @param {http.ServerResponse} res - The HTTP server response object.
 */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

/**
 * @description Starts the HTTP server, binding to the specified hostname and port.
 * Once the server is listening, the callback logs the server URL to the console.
 */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
