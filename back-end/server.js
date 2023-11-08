import http from "http";

const PORT = 3000;

const routes = {
    "/": "Route acess!",
    "/books":"Books acess!",
    "/authors": "Authors acess!",
};

const server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(routes[req.url])
});

server.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`)
});
