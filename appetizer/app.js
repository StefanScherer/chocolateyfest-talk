'use strict';

const fs = require('fs');
const files = fs.readdirSync('img');
const http = require('http');
const port = 8080;

for (let i = files.length - 1; i >= 0; i--) {
  if (files[i][0] === '.') files.splice(i, 1);
}

const pos = Math.floor(Math.random() * files.length);
const file = files[pos];

console.log(`Got ${files.length} img files, choosing position ${pos}.`);
http.createServer((req, res) => {
  const path = `img/${file}`;
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Error handling: ${path}\n`);
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Connection': 'close' });
      res.end(data, 'binary');
    }
  })
}).listen(port);

console.log(`Listening on port ${port} serving file ${file}.`);
