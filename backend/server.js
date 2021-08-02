const http = require('http');

const app = require('./app');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);

server.listen(port, (error) => {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log(`Server is listening on ${hostname}:${port}`);
  }
});
