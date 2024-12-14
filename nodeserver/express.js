const express = require('express')
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;
const url = require('url');
//const proxy = require('express-http-proxy');


// const certKey = path.join(__dirname, 'self-signed-sf.key');
// const key = fs.readFileSync(certKey);
// const certPath = path.join(__dirname, 'self-signed-sf.crt');
// const cert = fs.readFileSync(certPath);
// const options = {
//     key: key,
//     cert: cert
// };

//var NeoApi = "https://190.210.88.45";
const app = express();
app.use(express.json());
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// const apiProxy = proxy(NeoApi, {
//     proxyReqPathResolver: req => url.parse(req.originalUrl).path
// });

// app.use('/NeoApi/*', apiProxy);

// Busca el argumento "--mode" en process.argv
// Si se esta trabajando desde el proyecto core la ruta es "../(dist/public)" caso contrario es mas larga por la ubicacion de los archivos.
const modeIndex = process.argv.indexOf('--mode=production');
const mode = modeIndex !== -1 ? "production" : 'development'; // Valor por defecto 'development'
const isProduction = mode.toLowerCase() == "production";

app.get("/*", (req, res) => {
    let realPath = req.path != '/' ? req.path : 'index.html';
    const folder = isProduction ? "dist" : "public";
    const subdirctory = "../../../proyectos";
    realPath = path.join(__dirname, `${subdirctory}/eminoli/${folder}/${realPath}`);
    res.sendFile(realPath);
});

// app.post("/save/:filename", (req, res) => {
//     console.log("Params ---->")
//     console.log(req.params)
//     console.log("Body ---->")
//     console.log(req.body)
//     const mockupPath = path.join(__dirname, `../../../mockup/${req.params.filename}.json`);
//     // Asegúrate de que el body esté en formato JSON y guárdalo en el archivo
//     fs.writeFile(mockupPath, JSON.stringify(req.body), (err) => {
//         if (err) {
//             console.error("Error saving file:", err);
//             return res.status(500).send("Error saving file");
//         }
//         res.send("File saved successfully");
//     });
//     res.send("ok")
// });

/** Server https */
let server = http.createServer(app);
server.listen(port, () => {
    console.log("server starting on port : " + port)
});

/**
 * Para redireccionar puertos en windows powershell
 * netsh interface portproxy add v4tov4 listenport=8443 listenaddress=192.168.0.14 connectport=443 connectaddress=172.22.59.15 (ip del wsl 2)
 * netsh interface portproxy delete v4tov4 listenport=8443 listenaddress=192.168.0.14
 */
