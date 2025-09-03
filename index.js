const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`example app listening on port http://localhost:${port}`);
})

app.get('/',(req, res) => {
    res.send(`<h1> Server del mio Blog </h1>`);
} )

app.get('/bacheca',(req, res) => {
    const post = {
        title:
        content:
        img:
        tags:
    }
})