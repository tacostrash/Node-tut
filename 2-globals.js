// GLOBALS - NO WINDOW !!!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use module (CommonJS)
// module       - info about current module (file)
// process      - infor about env where the program is being executed

console.log(__dirname);
setInterval(()=>{
    console.log('hello world');
}, 1000)