const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@larissa",
    telefone:["(41) 99999-00000","(41) 9999-9999"],
};

cliente.endereco = [
{
    rua: "R. Macacos Falantes",
    numero: 269,
    apart: true,
    compl: "Ap. 19",
},
];

cliente.enderecos.push({
    rua: "R. Macacos Falantes",
    numero: 404,
    apart: true,
    compl: "Ap 14",
});

const lsitaApenasAps = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasAps);