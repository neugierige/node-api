'use strict';

const fs = require ('fs');
const inFile = process.argv[2];

fs.readFile(inFile, 'utf-8', (error, data)=>{
  if (error) {
    console.error(error.stack);
    return;
  }

  let dataArray = data.split(' ');

  // const showNames = function(name) {
  //   console.log("Hey ", name);
  // };
  //
  // dataArray.forEach(showNames);

  dataArray.forEach((name)=>{
    console.log("Hey ", name);
  });

});
