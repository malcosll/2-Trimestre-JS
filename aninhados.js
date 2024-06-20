const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@cu.com",
    telefone: ["(41) 9999-0000", "(41) 9988-0000"]
};

cliente.endereco = [
{
    rua: "R. joseph Climber",
    num: 1337,
    apart: true,
    complemento: "Ap 934",
}
];

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);