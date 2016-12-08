'use strict';

const fs = require('fs');

const inFile = process.argv[2];

fs.readFile(inFile, {encoding: 'utf8'}, (error, data) => {
  if (error) {
    console.error(error);
  }
  let lines = data.split('\n');

  let randomizedLines = line.sort(

  );

  randomizedLines.forEach((line)=>{
    console.log(line);
  });

});
