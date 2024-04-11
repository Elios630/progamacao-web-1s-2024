const express   = require('express');
const estoque   = require('./src/estoque');
const app       = express();

app.get('/', function (req, res) {
    res.send('Estoque');
});

app.get('/adicionar/:id/:nome/:qnt', function (req, res) {
    let id = req.params.id
    let nome = req.params.nome
    let qnt = req.params.qnt
    let p = estoque.criaProduto(id, nome, qnt)
    estoque.adicionarProduto(p)
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
});

app.get('/remove/:id', function (req, res) {
    let id = req.params.id
    estoque.removerProduto(id)
    res.send(estoque.listarProdutos());
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('localhost:' + PORT);
});