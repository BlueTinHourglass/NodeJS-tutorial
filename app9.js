var fs = require('fs');

fs.unlink('./stuff/writeMe.txt', (err) =>{
  if(err) throw err;
  fs.rmdir('stuff');
});
