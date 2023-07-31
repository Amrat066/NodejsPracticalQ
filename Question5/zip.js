var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('../Question5/index.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('../Question5/index.txt.gz'));
  
console.log("File Compressed.");

