const express = require("express");
const app = express();

//Sinalizamos para o Express que todo o body da requisição
// Estará estruturado em JSON
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello World");
});

//CRUD -> Create Read (All & Single/ById), Update, Delete

// "CRUD em Memória"

//Lista de textos (strings)
const lista = ["Rick Sanchez", "Morty Smith"];
//              0               1

//[GET] /personagens
// Read All
app.get("/personagens", function (req, res) {
    res.send(lista);
});

//[GET] / personagens/:id
app.get("/personagens", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

//[POST] /personagens
app.post("/personagens", function (req, res) {
    //Obtém o corpo da requisição  e coloca na variavel item
    const item = req.body.nome;

    lista.push(item);

    res.send("Item adicionado com sucesso");
});

//[PUT] / personagens/:id
app.put("/personagens/:id", function (req, res) {

    const id = req.params.id - 1;

    const item = req.body.nome;

    lista[id] = item;

    res.send("Atualizar uma personagem.");

//[DELETE] /personagens/:id
// Delete
app.delete("personagens/:id", function (req, res) {
    
    const id = req.params.id - 1;

    delete lista[id];

    res.send("Personagem removido com sucesso!")
});
app.listen(3000);