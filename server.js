/*8const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})


const modules=require("./modules");
res.write(`ADD:${modules.add(15,7)} \n`);
res.write(`SUBRACT:${modules.subtract(15,7)}\n`);
res.write(`MULTIPLY:${modules.multiply(15,7)} \n`);
res.write(`DIVIDE:${modules.divide(15,7)} `);
res.end();
});
server.listen(3000,()=>{
    console.log("server is running on  http://localhost:3000")
})
*/
const http = require('http');

const data = [
    {
        "name": "keerthana",
        "age": 25,
        "city": "bangalore",
        "amount": 1500
    },
    {
        "name": "madhu",
        "age": 23,
        "city": "mumbai",
        "amount": 2000
    },
    {
        "name": "gokul",
        "age": 26,
        "city": "delhi",
        "amount": 1000
    }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data)); 
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});