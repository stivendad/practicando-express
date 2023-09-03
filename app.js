import express from "express";
import hbs from "hbs";

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const app = express();
const port = 8080



// Usar hbs
app.set('view engine', 'hbs');
// Parciales en hbs
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.use( express.static('public') )


app.get('/', (req, res) => {
    res.render('home',{
        nombre: "Daniel Tejada",
        titulo: "Curso de Node"
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "Daniel Tejada",
        titulo: "Generic Page"
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Daniel Tejada",
        titulo: "Element Page"
    })
})

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