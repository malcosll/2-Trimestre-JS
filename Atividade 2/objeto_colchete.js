const cliente = {
    nome:"Andre",
    idade:32,
    cpf:"111222333",
    email:"andre@gmail.com"
};

const chaves = ["nome", "idade", "cpf", "email"];
console.log(`O nome do cliente é ${cliente.nome}, essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});