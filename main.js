const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

 
//Task 1
/*const serv = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.end('Hello World');
   });

 serv.listen(port, hostname, () => {
    console.log('launching');
 });*/





//Task 2
 /*const serv = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type' : 'text/html'});
   res.end('<b>Hello World, I from UKD!</b>');
   });

   serv.listen(port, hostname, () => {
   console.log('launching');
   });*/





   //Task *
/*const serv = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) 
    {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end('404 Not Found')
    }  

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

serv.listen(port, hostname, () => {
  console.log('launching')
})*/