class Agenda {
    constructor() {
        this.contatos = [];
    }

    addContato(nome, sobrenome, data_nasc, n_tipo, ddd, n_num, end_tipo, logradouro, end_num, cep, complemento, email, e_tipo) {
        this.contatos.push(new Contato(new Pessoa(nome, sobrenome, data_nasc), new Numero(n_tipo, ddd, n_num), new Endereco(end_tipo, logradouro, end_num, cep, complemento), new Email(email, e_tipo)));   
    }

    criarContato() {
        var mensagens = ["nome", "sobrenome", "data de nascimento", "tipo de telefone", "DDD", "Número do telefone", "Tipo de endereço","Logradouro", "Número da casa", "CEP", "Complemento", "Email", "Tipo de email"];
        var dados = [];
        for(var i = 0; i < mensagens.length; i++) {
            dados.push(window.prompt("Informe " + mensagens[i]));
        }

        agenda.addContato(dados[0],dados[1],dados[2],dados[3],dados[4],dados[5],dados[6],dados[7],dados[8],dados[9],dados[10],dados[11],dados[12]);
    }
}

class Contato {
    constructor(pessoa, numero, end, email) {
        this.pessoa = pessoa;
        this.numero = [];
        this.numero.push(numero);
        this.end = [];
        this.end.push(end);
        this.email = [];
        this.email.push(email);
    }

    addNovo() {
        var opcao = window.prompt("Digite a opção: Número(1), Endereço(2), Email(3)");
        if(opcao == 1) {
            var n_tipo = window.prompt("Digite o tipo");
            var ddd = window.prompt("Digite o ddd");
            var n_num = window.prompt("Digite o número");
            this.addNum(n_tipo, ddd, n_num);
        } else if (opcao == 2) {
            var end_tipo = window.prompt("Digite o tipo");
            var logradouro = window.prompt("Digite o logradouro");
            var num = window.prompt("Digite o Número");
            var cep = window.prompt("Digite o cep");
            var complemento = window.prompt("Digite o complemento");
            this.addEnd(end_tipo, logradouro, num, cep, complemento)
        } else if (opcao == 3){
            var tipo = window.prompt("Digite o tipo");
            var email = window.prompt("Digite o email");
            this.addEmail(tipo, email)
        } else {
            alert("Opção Inválida");
            this.addNovo();
        }
    }

    addNum(n_tipo, ddd, n_num) {
        this.numero.push(new Numero(n_tipo, ddd, n_num));
    }

    addEnd(end_tipo, logradouro, num, cep, complemento) {
        this.end.push(new Endereco(end_tipo, logradouro, num, cep, complemento));
    }

    addEmail(tipo, email) {
        this.email.push(new Email(tipo, email));
    }
}

class Pessoa {
    constructor(nome, sobrenome, data_nasc) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_nasc = data_nasc;
    }
}

class Numero {
    constructor(tipo, ddd, num) {
        this.tipo = tipo;
        this.ddd = ddd;
        this.num = num;
    }
}

class Endereco {
    constructor(tipo, logradouro, num, cep, complemento) {
        this.tipo = tipo;
        this.logradouro = logradouro;
        this.num = num;
        this.cep = cep;
        this.complemento = complemento;
    }
}

class Email {
    constructor(tipo, email) {
        this.email = email;
        this.tipo = tipo;
    }
}

var agenda = new Agenda();

window.addEventListener('load', function() {
    var criar = document.getElementById('criar');
    criar.addEventListener('click', agenda.criarContato, false);
});