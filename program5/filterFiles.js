var fs = require('fs')

module.exports = function getFiles(dir, filterStr, callback) {
  fs.readdir(dir, (err, list) => {
    if (err)
      return callback(err)

    list = list.filter((file) => file.endsWith('.' + filterStr))

    return callback(null, list)
  })
}
