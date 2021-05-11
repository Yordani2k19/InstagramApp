const fs = require('fs')

export const writeToFile = (file, dataToAdd) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(dataToAdd), function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
