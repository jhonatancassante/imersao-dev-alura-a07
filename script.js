var deck = [];

//      number: ,
//      nome: "",
//      atributos: { vida: , ataque: , defesa: , velocidade: }

deck = [
  {
    number: 1,
    nome: "Bulbasaur",
    tipos: { primario: "Grass", secundario: "Poison" },
    atributos: {
      hp: 45,
      ataque: 49,
      defesa: 49,
      spAtaque: 65,
      spDefesa: 65,
      speed: 45
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/001.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 2,
    nome: "Ivysaur",
    tipos: { primario: "Grass", secundario: "Poison" },
    atributos: {
      hp: 60,
      ataque: 62,
      defesa: 63,
      spAtaque: 80,
      spDefesa: 80,
      speed: 60
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/002.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 3,
    nome: "Venusaur",
    tipos: { primario: "Grass", secundario: "Poison" },
    atributos: {
      hp: 80,
      ataque: 82,
      defesa: 83,
      spAtaque: 100,
      spDefesa: 100,
      speed: 80
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/003.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 3,
    nome: "Venusaur (Mega Venusaur)",
    tipos: { primario: "Grass", secundario: "Poison" },
    atributos: {
      hp: 80,
      ataque: 100,
      defesa: 123,
      spAtaque: 122,
      spDefesa: 120,
      speed: 80
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/003M.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 4,
    nome: "Charmander",
    tipos: { primario: "Fire", secundario: "" },
    atributos: {
      hp: 39,
      ataque: 52,
      defesa: 43,
      spAtaque: 60,
      spDefesa: 50,
      speed: 65
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/004.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 5,
    nome: "Charmeleon",
    tipos: { primario: "Fire", secundario: "" },
    atributos: {
      hp: 58,
      ataque: 64,
      defesa: 58,
      spAtaque: 80,
      spDefesa: 65,
      speed: 80
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/005.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 6,
    nome: "Charizard",
    tipos: { primario: "Fire", secundario: "Flying" },
    atributos: {
      hp: 78,
      ataque: 84,
      defesa: 78,
      spAtaque: 109,
      spDefesa: 85,
      speed: 100
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/006.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 6,
    nome: "Charizard (Mega Charizard X)",
    tipos: { primario: "Fire", secundario: "Dragon" },
    atributos: {
      hp: 78,
      ataque: 130,
      defesa: 111,
      spAtaque: 130,
      spDefesa: 85,
      speed: 100
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/006MX.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 6,
    nome: "Charizard (Mega Charizard Y)",
    tipos: { primario: "Fire", secundario: "Flying" },
    atributos: {
      hp: 78,
      ataque: 104,
      defesa: 78,
      spAtaque: 159,
      spDefesa: 115,
      speed: 100
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/006MY.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 7,
    nome: "Squirtle",
    tipos: { primario: "Water", secundario: "" },
    atributos: {
      hp: 44,
      ataque: 48,
      defesa: 65,
      spAtaque: 50,
      spDefesa: 64,
      speed: 43
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/007.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 8,
    nome: "Wartortle",
    tipos: { primario: "Water", secundario: "" },
    atributos: {
      hp: 59,
      ataque: 63,
      defesa: 80,
      spAtaque: 65,
      spDefesa: 80,
      speed: 58
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/008.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 9,
    nome: "Blastoise",
    tipos: { primario: "Water", secundario: "" },
    atributos: {
      hp: 79,
      ataque: 83,
      defesa: 100,
      spAtaque: 85,
      spDefesa: 105,
      speed: 78
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/009.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  },
  {
    number: 9,
    nome: "Blastoise (Mega Blastoise)",
    tipos: { primario: "Water", secundario: "" },
    atributos: {
      hp: 79,
      ataque: 103,
      defesa: 120,
      spAtaque: 135,
      spDefesa: 115,
      speed: 78
    },
    links: {
      linkIcon: "",
      linkImg:
        "./img/009M.png",
      linkTipo1: "",
      linkTipo2: ""
    }
  }
];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCartaRemover() {
  var sorteio = true;

  while (sorteio) {
    if (deck.length > 1) {
      var indice = parseInt(Math.random() * deck.length);
      cartaMaquina = deck[indice];
      deck.splice(indice, 1);

      indice = parseInt(Math.random() * deck.length);
      cartaJogador = deck[indice];
      deck.splice(indice, 1);
      document.getElementById("btnSortear").disabled = true;
      document.getElementById("btnJogar").disabled = false;
      exibirOpcoes();
      console.log(cartaJogador);
      sorteio = false;
    } else {
      deck = pokemons(quantCards);
      console.error(
        "As cartas acabaram, sorteie novamente para embaralhar o deck."
      );
      sorteio = false;
    }
  }
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";
  var firstTime = true;

  for (var atributo in cartaJogador.atributos) {
    var atributoUpper = atributo.toUpperCase();

    var tagInput = document.createElement("input");
    var tagLabel = document.createElement("label");

    opcoes.appendChild(tagInput);
    opcoes.appendChild(tagLabel);

    tagInput.type = "radio";
    tagInput.id = atributo;
    tagInput.name = "atributo";
    tagInput.value = atributo;
    if (firstTime) {
      tagInput.checked = true;
      firstTime = false;
    }
    tagLabel.setAttribute("for", atributo);
    tagLabel.innerHTML = atributoUpper;
  }
}

function obtemAtributo() {
  var atributo = document.getElementsByName("atributo");

  for (var item of atributo) {
    if (item.checked) {
      return item.value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var resultado = document.getElementById("resultado");

  var valorJogador = cartaJogador.atributos[atributoSelecionado];
  var valorMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorJogador > valorMaquina) {
    resultado.innerHTML = "Você venceu!";
  } else if (valorJogador < valorMaquina) {
    resultado.innerHTML = "Você perdeu!";
  } else {
    resultado.innerHTML = "Deu empate!";
  }

  console.log("Valor Atributo Jogador: " + valorJogador);
  console.log("Valor Atributo Máquina: " + valorMaquina);

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

/*
function sortearCartaShuffleRemover() {
  var sorteio = true;

  while (sorteio) {
    if (deck.length > 1) {
      deck.sort((a, b) => 0.5 - Math.random());
      cartaMaquina = deck[0];
      deck.shift();

      deck.sort((a, b) => 0.5 - Math.random());
      cartaJogador = deck[0];
      deck.shift();

      console.log(cartaJogador.nome + " " + cartaMaquina.nome);
      sorteio = false;
    } else {
      deck = pokemons(quantCards);
      console.error(
        "As cartas acabaram, sorteie novamente para embaralhar o deck."
      );
      sorteio = false;
    }
  }
}
*/

/*
function sortearCarta() {
  var indiceMaquina = parseInt(Math.random() * deck.length);
  cartaMaquina = deck[indiceMaquina];

  var indiceJogador = parseInt(Math.random() * deck.length);
  while (indiceMaquina == indiceJogador) {
    indiceJogador = parseInt(Math.random() * deck.length);
  }
  cartaJogador = deck[indiceJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}
*/

/* 
1. Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
2. Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
3. Adicionar a imagem do personagem assim que você selecionar a carta dele
*/