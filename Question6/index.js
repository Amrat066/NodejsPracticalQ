var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('../Question5/index.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('../Question5/index1.txt','utf-8'));
  
console.log("File Decompressed.");
