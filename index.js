const express = require('express');
const app = express();
const port = 3000;

let posts = [
  {
    title: "Ciambellone soffice della nonna",
    content: "Un dolce classico della tradizione italiana, soffice e profumato, ideale per la colazione o la merenda.",
    img: "images/ciambellone.jpeg",
    tags: ["dolci", "colazione", "tradizione", "ciambellone"]
  },
  {
    title: "Cracker alla barbabietola",
    content: "Snack croccante e salutare a base di barbabietola, perfetto come aperitivo o spuntino leggero.",
    img: "images/cracker_barbabietola.jpeg",
    tags: ["salato", "barbabietola", "snack", "vegetariano"]
  },
  {
    title: "Pane fritto dolce",
    content: "Un pane soffice fritto e spolverato con zucchero, goloso e irresistibile, tipico delle feste di paese.",
    img: "images/pane_fritto_dolce.jpeg",
    tags: ["dolci", "fritti", "tradizione", "merenda"]
  },
  {
    title: "Pasta alla barbabietola",
    content: "Un primo piatto colorato e ricco di sapore, con crema di barbabietola e formaggio cremoso.",
    img: "images/pasta_barbabietola.jpeg",
    tags: ["primi", "pasta", "barbabietola", "vegetariano"]
  },
  {
    title: "Torta paesana",
    content: "Un dolce rustico tipico della Brianza, preparato con pane raffermo, cacao, uvetta e pinoli.",
    img: "images/torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "pane", "torta"]
  }
];
app.use(express.static(`public`));

app.listen(port, () => {
    console.log(`example app listening on port http://localhost:${port}`);
})

app.get('/',(req, res) => {
    res.send(`<h1> Server del mio Blog </h1>`);
} )

app.get('/bacheca',(req, res) => {
    res.json(posts)
})