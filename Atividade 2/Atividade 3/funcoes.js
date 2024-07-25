const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@larissa.com",
    telefone: ["(41) 9999-0000", "(41) 0990-0909"],
    saldo: 200,
    efetuaPagamento: function (valor){
         if(valor > this.saldo){
            console.log("Saldo insuficiente!");
        }else {
            this.saldo -= valor;
            console.log(`Pagamento realizado, o novo saldo é: $(this.saldo)`);
    }   }
};