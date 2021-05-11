const fs = require('fs')

export const readFile = (file, defaultTo = []) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, function (err, _file) {
      console.log('_file', typeof _file)
      if (err) {
        reject(err)
      } else {
        resolve(_file && _file.length ? JSON.parse(_file) : defaultTo)
      }
    })
  })
