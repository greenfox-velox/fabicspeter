'use strict';

var fs = require('fs');

// create a function that takes 3 parameters
//  - readFileName: a filename where it reads from
//  - wirteFileName: a filename where it writes to
//  - cb: callback with one parameter: the error if occured
//
// It should read the file named readFileName and double the text of the file
// like: "apple" -> "appleapple"
// Than it should write this doubled text to the file named writeFileName
// When it finished it should call the callback with a null
// If there is any error during the process it should call the callback with the error
function copy_the_choosen_file_cont(readFileName, writeFileName, cb) {
  fs.readFile(readFileName, function(error, content) {
    if (error) {
      return cb(error);
    }
    console.log(String(content));
    fs.writeFile(writeFileName, String(content) + String(content), function(error){
      if (error) {
        return cb(error);
      }
    });
    cb(null);
  });
}
copy_the_choosen_file_cont('fecse.txt', 'writable.txt', function error(){
  console.log('null');
});
