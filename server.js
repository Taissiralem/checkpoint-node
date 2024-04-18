import http from "http";

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello Node!!!!</h1>\n");
    } else {
      res.statusCode = 404;
      res.write("Not Found");
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("Server listening on port 3000");
  });
