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
    //remeber to put "const chunks = []" on the outside
    // so the scope is global
  });

  req.on("end", () => {
    console.log("ending", chunks);
    const allThree = {
      url,
      method,
      data,
    };
    if (url == "/echo" && (method == "POST" || method == "PUT") && chunks > 0) {
      res.statusCode = 202;
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(allThree));
      res.end();
    } else if (url == "/about" && method == "GET") {
      res.writeHead(200, { "context-type": "text/html" });
      res.write("<h1>About Matty Matt<h1>");
      res.end();
    } else if (url == "/" && (method == "GET" || method == "POST")) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`Thank you for ${method.toLowerCase()}ing`);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("ERROR: YOU'VE DOOMED US ALL");
      res.end();
    }
  });
  //Put all the chunks together and read the message
  //Reconstructing the parts of the message
  const data = JSON.parse(Buffer.concat(chunks).toString());
  console.log(data);
  //GET request but technically a wildcard
});
server.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});
