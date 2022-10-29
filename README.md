# Core Node Modules and their methods
___

1. `path`
  * ```basename(__filename)``` - Returns the name of the file

  * ```dirname(__filename)``` - Returns the name of the file's directory

  * ```extname(__filename)``` - Returns the name of the file's extention
  * 
  * ```parse(__filename)``` - Returns an object of the file's name, directory, extention, base and root. 

2. `fs`
  * ```mkdir()``` - Creates an empty folder
   e.g.
  ```Javascript 
fs.mkdir(path.join(__dirname, "/test"),{}, (err)=>{
    if(err) throw err
    console.log("Folder created...")
})
```
  * ```writeFile()``` - Creates a folder and fills it with a stuff
   e.g.
  ```Javascript 
fs.writeFile(path.join(__dirname, "/test", 'hello.txt'),'Hello, World', (err)=>{
    if(err) throw err
    console.log("File Written to...")
})
```
  * ```appendFile()``` - Creates a folder and fills it with a stuff
   e.g.
  ```Javascript 
fs.appendFile(path.join(__dirname, "/test", 'hello.txt'),'Hello, World', (err)=>{
    if(err) throw err
    console.log("File Written to...")
})
```
  * ```readFile()``` - Reads the contents of a file
   e.g.
  ```Javascript 
fs.readFile(path.join(__dirname, "/test", 'hello.txt'),'utf8', (err, data)=>{
    if(err) throw err
    console.log(data)
})
```



