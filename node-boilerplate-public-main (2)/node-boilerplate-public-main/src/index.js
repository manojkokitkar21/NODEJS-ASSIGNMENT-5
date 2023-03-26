const http = require("http");

const PORT = 8081;

const server = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
