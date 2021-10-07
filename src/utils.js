const path = require('path')
const fs = require('fs')

const readDir = (dir) => {
  const result = []
  const dirList = fs.readdirSync(dir)
  dirList.forEach((item) => {
    const newPath = path.join(dir, item)
    const stats = fs.statSync(newPath)
    if (stats.isDirectory()) {
      result.push(newPath)
    }
  })
  return result
}

module.exports = {
  readDir
}
