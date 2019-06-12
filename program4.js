var fs = require('fs')

fs.readdir(process.argv[2], (err, list) => {
  if (!err)
  for (el of list)
    if (el.endsWith('.'+process.argv[3])) 
      console.log(el)
});