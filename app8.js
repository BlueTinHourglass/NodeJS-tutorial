var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});


//console.log('test');
