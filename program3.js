var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
  if (!err) console.log(data.toString().split('\n').length -1)
});