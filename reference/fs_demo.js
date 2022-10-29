const fs = require('fs')
const path = require('path')

fs.rename(path.join(__dirname, '/test', 'hello.sh'), path.join(__dirname, '/test', 'Hello.sh'), (err) => {
    if (err) throw err
    console.log("File successsfully renamed...");
})