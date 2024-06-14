const {venderProduto, adicionarEstoque} = require('../assets/js/controleEstoque.js'); // Importar função


test('Venda realizada, Estoque atual 50 itens, quantidade de venda: 20 itens. Novo estoque 30 itens?', () => {
    expect(venderProduto(50, 20)).toBe(30);
});  

test('Estoque atual = 50 itens + adição de 10 itens = 60 itens novo estoque', () => {
    expect(adicionarEstoque(50, 10)).toBe(60);
});