const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e52973f69b49ffa4e1d3df3c9fa3f6bd")
        .on('data', (chunk)=> {
          console.log(chunk)
        })
        .on('end', (err)=> {
          if (err) {
            return console.log('connection closed due to errors', err);
          }
         
          console.log('end');
        });
    }

});
server.listen(8001, "127.0.0.1");