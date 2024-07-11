import http from "http"
import fs from "fs"
const  port = 3000;

export const server  = http.createServer(function(req,res){
    Response.writeHead(200 , {"Content-Type": "text/html" });
    fs.readFile("index.html", function(error,data){
        if(error){
            res.writeHead(404);
            res.write("Error :File Not Found")
        }else{
            res.write(data);
        } res.end();
    })
   
})

server.listen(port,function(error){
    if(error){
        console.log("Error",error);
    }else{
        console.log("Server is running on port",port);
    }
})