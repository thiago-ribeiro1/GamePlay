function venderProduto(estoqueAtual, quantidade) {
    if (quantidade <= estoqueAtual) {
        return estoqueAtual - quantidade; // lógica para venda de produto
    } else {
        throw new Error("Quantidade de venda excede o estoque disponível.");
    }
}  
 
function adicionarEstoque(estoqueAtual, quantidade) {
    if (quantidade > 0) {
        return estoqueAtual + quantidade; // lógica para adicionar estoque
    } else {
        throw new Error("Insira uma quantidade valida.");
    }
}

module.exports = {venderProduto, adicionarEstoque}; // exportar função