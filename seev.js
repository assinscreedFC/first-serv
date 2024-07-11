import http from "http";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, extname, join } from 'path';

const port = 3000;

// Obtenir le nom de répertoire actuel dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const server = http.createServer(function(req, res) {
    let filePath = req.url === "/" ? "/index.html" : req.url;
    const ext = extname(filePath);
    let contentType = "text/html";

    switch (ext) {
        case ".js":
            filePath = join(__dirname, "src", filePath);
            contentType = "application/javascript";
            break;
        case ".css":
            filePath = join(__dirname, "src", "style", filePath);
            contentType = "text/css";
            break;
        case ".html":
            filePath = join(__dirname, filePath);
            contentType = "text/html";
            break;
        default:
            filePath = join(__dirname, filePath);
            contentType = "text/plain";
    }

    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("Error: File Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log("Error", error);
    } else {
        console.log("Server is running on port", port);
    }
});
