import express from "express";

const app = express();
const port = 8080

app.get('/', (req, res) => {
    res.send('Hola mundo')
});

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});