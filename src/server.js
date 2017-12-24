const http = require('http');
const router = require('./router.js');
const server = http.createServer(router);
const port  = process.env.Port ||4000;
const hostname = process.env.HostName;
server.listen(port, hostname,() => {
  console.log(`the server work on port ${post} and hostname ${hostname}`);
});
