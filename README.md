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


3. `os`


   * `platform()` - Returns the name of the operating system the computer is on
   e.g.

   ``` javascript
   console.log(os.platform())
   ```


      * `arch()` - Returns the type of CPU architecture computer is using
      e.g.

      ``` javascript
      console.log(os.arch())
      ```
        

      * `cpus()` - Returns a list of an object showing the info about the individual cores of the CPU
      e.g.

      ``` javascript
      console.log(os.cpus())
      ```
        
        

      * `freemem()` - Returns the value of remaining memory
      e.g.

      ``` javascript
      console.log(os.freemem())
      ```        
        

      * `totalmem()` - Returns the total memory
      e.g.

      ``` javascript
      console.log(os.totalmem())
      ```

        
      * `homedir()` - Returns the home directory of the computer
      e.g.

      ``` javascript
      console.log(os.homedir())
      ```
        


      * `uptime()` - Returns the amount of time in seconds the system has been up
      e.g.

      ``` javascript
      console.log(os.uptime())
      ```
        

