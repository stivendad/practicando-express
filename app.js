import express from "express";

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const app = express();
const port = 8080

// Servir contenido estático
app.use( express.static('public_template') )


app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' )
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});