//import * as http from "http";

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//Import syntax below
const http = require("http");

// Finish setting up the server

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
    
    console.log(data);
    //remeber to put "const chunks = []" on the outside
    // so the scope is global
  });

  req.on("end", () => {
    console.log("ending", chunks);
    const data = Buffer.concat(chunks).toString();
    const allThree = {
      url,
      method,
      data,
    };
    if (url == "/" && (method == "GET" || method == "POST")) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`Thank you for ${method.toLowerCase()}ing`);
      res.end();}
       else if (url == "/about" && method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Matty Matt<h1>");
      res.end();
    } else if (url == "/echo" && (method == "GET" || method == "PUT")) {
      console.log('echo reached');
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(allThree));
      res.end();
    } else  {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("ERROR: YOU'VE DOOMED US ALL");
      res.end();
    }
   
  });
  //Put all the chunks together and read the message
  //Reconstructing the parts of the message

  //GET request but technically a wildcard
});
server.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});
