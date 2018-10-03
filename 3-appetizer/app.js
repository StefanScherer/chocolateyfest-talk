'use strict';

const fs = require('fs');
const files = fs.readdirSync('img');
const Jimp = require('jimp');
const http = require('http');
const os = require('os');
const port = 8080;

for (let i = files.length - 1; i >= 0; i--) {
  if (files[i][0] === '.') files.splice(i, 1);
}

const pos = Math.floor(Math.random() * files.length);
const file = files[pos];

console.log(`Got ${files.length} img files, choosing position ${pos}.`);
const path = `img/${file}`;

Jimp.read(path).then(image => {
  console.log('Got image');
  Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(black => {
    Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(white => {
      console.log('Got font');
      image
        .scaleToFit(800, 600)
        .print(black, 10, 10, os.hostname())
        .print(white, 8, 8, os.hostname())
        .quality(98) // set JPEG quality
        .getBuffer(Jimp.MIME_JPEG, (err, data) => {
          console.log(`Listening on port ${port} serving file ${file}.`);
          http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': Jimp.MIME_JPEG, 'Connection': 'close' });
            res.end(data, 'binary');
          }).listen(port);        
      });
    });
  });
});
