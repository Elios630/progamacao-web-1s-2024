const express = require('express');
const mat = require('./module/verificarNumeroPrimo');
const app = express();


app.get('/', function(req,res){
    res.send('pagin inicial');
});

app.get('/ola', function(req,res){
    res.send('ola');
});

app.get('/ola/:n', function(req,res){
    let n = req.params.n;
    res.send('ola' +n);
});

app.get('/primo/:n', function(req,res){
    let n = req.params.n;
    if (verificarNumeroPrimo(n) == true) {
        res.send("é primo");
    }else{
        res.send("não é primo");
    }
    
});


const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta '+PORT);
});