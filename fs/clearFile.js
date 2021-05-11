const fs = require('fs')

export const clearFile = (file) =>
  new Promise((resolve, reject) => {
    fs.truncate(file, 0, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
      console.log('Done')
    })
  })
