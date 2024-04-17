let produtos = [];

function criaProduto(id, nome, qnt) {
    let p ={
        id: id,
        nome: nome,
        qnt: qnt
    };
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p)=>{
        return p.id != id;
    });
}

function editarProduto(id, qnt) {
    const produtoIndex = produtos.findIndex(p => p.id == id);

    if (produtoIndex !== -1) produtos[produtoIndex].qnt = parseInt(qnt);
}


module.exports = {
    criaProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};