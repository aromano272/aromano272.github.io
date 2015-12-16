var data = [
{ pergunta:"qual das seguintes configuracoes de um canal rs232 eh a mais eficiente?",resposta: ["9600, 7, paridade par, 2 stop bits", "9600, 8, 1 stop bits", "14400, 8, paridade par, 1 stop bits", "19200, 7, 2 stop bits"
], correcta: 2
},{ pergunta:"quantos bytes tem um mac address?",resposta: ["48", "16", "12", "6"
], correcta: 4
},{ pergunta:"qual das seguintes camadas de osi eh responsavel pelos enderecos ip?",resposta: ["sessao", "transporte", "rede", "ligacao"
], correcta: 3
},{ pergunta:"qual das seguintes formulas de calculo de eficiente de um canal esta correcta?",resposta: ["eficiencia = n bits de dados / n de bits transmitidos - 1", "eficiencia = n bits de dados / n de bits transmitidos", "eficiencia = (n bits de dados / n de bits transmitidos) * 2 - 1", "eficiencia = (n bits de dados / n de bits transmitidos) / 8"
], correcta: 2
},{ pergunta:"quais as siglas do seguintes comando nao numerado: Set Normal Balanced Mode Extended?",resposta: ["SABM", "SNABM", "SNBME", "SABME"
], correcta: 4
},{ pergunta:"que papel desempenha a ITU na normalizacao?",resposta: ["efectua a regulacao e desenvolvimentos das comunicacoes terrestres e via satelite", "realiza trabalhos de natureza tecnica sob coordenacao do IESG e coordenacao arquitetura do IAB", "organiza viagens com todas as entidade envolvidas anualmente", "regulariza protocolos de modo a que constituam especificacoes estaveis"
], correcta: 1
},{ pergunta:"qual dos meios de comunicacoes sofre menos perturbacoes e tem mais rapida transmissao?",resposta: ["cabo coaxial", "laser", "fibra otica", "micro ondas"
], correcta: 3
},{ pergunta:"qual dos codigos de linha eh mais eficaz para uso de norma de redes locais?",resposta: ["NRZ Unipolas", "NRZI", "NRZ Bipolar", "Manchester"
], correcta: 4
},{ pergunta:"dimensao minima da frame ethernet de modo a que a estacao emissora detete se houve colisao?",resposta: ["32", "60", "64", "16"
], correcta: 2
},{ pergunta:"indique qual a expresssao que melhor identifica a tipologia linear?",resposta: ["Implementado com o uso de concentradores, isola as ligacoes dentro do concentrador", "Implementado com cabo coaxial ou fibra e tem um unico meio de comunicacao"
], correcta: 2
},{ pergunta:"o modelo osi eh composto por quantas camadas?",resposta: ["6", "9", "5", "7"
], correcta: 4
},{ pergunta:"qual das expressoes se aplica numa trnasmissao sincrona?",resposta: ["o transmissor e o recetor devem ser configurados antecipadamente para que a comunicacao se estabeleca", "o sincronisco eh estabelecido a cada caracter atravez de bits com finalidade especifica(start e stop)"
], correcta: 1
},{ pergunta:"quantos bytes tem o protocolo x-modem?",resposta: ["8", "128", "64", "256"
], correcta: 2
},{ pergunta:"o que significa a sigla osi?",resposta: ["Open system interconnection", "open source interface", "close system interconnection", "our selfs inside"
], correcta: 1
},{ pergunta:"fcs(frame check sequence) eh baseado em que?",resposta: ["baseado num codigo polinomial", "baseado num codigo hexagonal", "baseado em fatos verificos", "baseado num codigo binomial"
], correcta: 1
},{ pergunta:"no codigo de linha AMI quando o bit eh 0 qual eh o valor do sinal?",resposta: ["impulso de clock", "inverte polaridade", "duplo impulso clock", "0"
], correcta: 4
},{ pergunta:"qual eh a camada que tem como principal funcao garantir a transmissao de dados atraves de uma linha serie, fornecendo servicos aos niveis superiores?",resposta: ["ligacao", "transporte", "rede", "sessao"
], correcta: 1
},{ pergunta:"quais as principais ventagens da topologia de rede linear?",resposta: ["facil instalacao, baixo custo", "melhor comunicacao", "melhor velocidade", "facil manutencao e detecao de erros"
], correcta: 1
},{ pergunta:"o modelo desta figura representa que codigo de linha?",resposta: ["HDB3", "Manchester", "AMI", "Oxford"
], correcta: 2
},{ pergunta:"a seguintes figura representa que tipo de recuperacao?",resposta: ["recuperacao por timeout", "recuperacao por rejeicao", "recuperacao por erro", "recuperacao up/down"
], correcta: 1
},{ pergunta:"qual eh o polinomio gerador do x-modem?",resposta: ["x3+x+1", "x2+x+1", "x5-x2-1", "x4"
], correcta: 1
},{ pergunta:"qual o meio fisico de transmissao com maior velocidade de transmissao de dados?",resposta: ["cabo coaxial", "laser", "fibra otica", "bluetooth"
], correcta: 3
},{ pergunta:"na tecnica de comutacao em pacotes o que acontece inicialmente ah mensagem?",resposta: ["eh dividida", "eh interligada com o endereco de ip", "eh a juncao do endereco fisico e IP", "nenhum das opcoes esta correcta"
], correcta: 1
},{ pergunta:"na transmissao assincrona e sincrona a sigla rts significa?",resposta: ["ready to standart", "ready to service", "ready to send", "ready to server"
], correcta: 3
},{ pergunta:"qual dos protocolos nao pertence ah camada aplicacao?",resposta: ["ssh", "imap", "dccp", "snmp"
], correcta: 3
},{ pergunta:"qual a configuracao do codigo de linha do protocolo rs242c?",resposta: ["bit inicial a 0, 7/8 bits de informacao, bit de paridade e stop bit", "bit inicial a 1, start bit quando inicia a transferencia, transmissao de 8/9 bits de informacao, bit de paridade e stop bit", "bit inicial a 1, start bit quando inicia a transferencia, transmissao de 7/8 bits de informacao, bit de paridade", "bit inicial a 1, start bit quando inicia a transferencia, transmissao de 7/8 bits de informacao, bit de paridade e stop bit"
], correcta: 4
},{ pergunta:"qual das seguintes opcoes demonstra o modelo frame ethernet II?",resposta: ["preambulo, sfd, da, sa, type, data, fcs", "preambulo, sfd, da, i/u, type, data, snmp", "preambulo, sfd, u/l, sa, ipx, data, fcs", "preambulo, sfd, da, sa, type, data, fcs"
], correcta: 1
},{ pergunta:"qual eh o codigo que a interface rs232 utiliza?",resposta: ["nrz bipolar(polar)", "nrz unipolar", "nrzi", "nrz-m"
], correcta: 1
},{ pergunta:"qual dos seguintes codigos de linha eh um dos utlizados para comunicacoes em rede RDIS?",resposta: ["2b1q", "nrz", "nrzi", "hdb3"
], correcta: 1
},{ pergunta:"escolha em baixo indicando uma vantagem de uma rede?",resposta: ["dificil instalacao", "partilha de informacao", "mais caro", "mais lento"
], correcta: 2
},{ pergunta:"em que camada operam os seguintes protocolos: ethernet, 802,11 wifi, tokenring, fddi, ppp, frame delay?",resposta: ["transporte", "rede", "fisica", "ligacao"
], correcta: 4
},{ pergunta:"RR, RNR, REJ e SREJ sao?",resposta: ["comandos de supervisao", "comandos nao numerados", "respostas nao numeradas", "campos de dados"
], correcta: 1
},{ pergunta:"qual dos seguitnes nao eh um codigo de linha?",resposta: ["hdb3", "4b3t", "manchester", "2b1t"
], correcta: 4
},{ pergunta:"qual dos seguintes dos seguintes protocolos surgiu com o objectivo de substituir o protocolo SLIP?",resposta: ["frame ethernet II", "PPP", "MAC-CSMA/CD", "TCP/IP"
], correcta: 2
},{ pergunta:"KERMIT eh um protocolo de dominio publico que foi desenvolvida em que universidade?",resposta: ["columbia", "cambridge", "texas", "catolica"
], correcta: 1
},{ pergunta:"as redes podem ter varias classificacoes, dependendo da dimensao da sua area geografica, indica qual a correcta?",resposta: ["MAN < PAN", "SAN > LAN", "PAN < LAN", "WAN < MAN"
], correcta: 3
},{ pergunta:"indique qual dos protocolos pertence ah camada de transporte?",resposta: ["rs232", "udp", "pop3", "icmp"
], correcta: 2
},{ pergunta:"token ring. escolha o termo mais correcto?",resposta: ["varios sentidos", "colisoes", "mais rapido", "sem colisoes"
], correcta: 4
},{ pergunta:"qual a espessura de uma fibra monomodo?",resposta: ["50 a 65 um", "20 a 30 um", "10 a 20 um", "3 a 10 um"
], correcta: 4
}
];

var respostaCorrecta;
var respostaCorrectaNum;
var intervalo;


var rng = function(seed) {
  var len = seed.length;
  return Math.floor(Math.random() * len);
}

var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var escolherPergunta = function(data) {
  // escolher pergunta
  var seed = rng(data);
  var escolhida = data[seed];
  // ler pergunta texto
  var pergunta = escolhida.pergunta;
  // ler cada uma das respostas
  var resposta = escolhida.resposta;
  // ler resposta certa atraves de resposta[correcta]
  respostaCorrectaNum = escolhida.correcta;
  respostaCorrecta = resposta[escolhida.correcta - 1];

  return {pergunta, resposta};
}

var gerarPergunta = function(data) {
  var $pergunta = $("<h3 class='pergunta'/>").text(data.pergunta);
  var $corpoPergunta = $("<div class='corpoPergunta container btn-group-vertical'/>").append($pergunta);
  $resposta = [];
  for(var j = 0; j < data.resposta.length; j++) {
    var $el = $("<div class='resposta btn btn-default'/>").text(data.resposta[j]);
    $resposta.push($el);
  }
  shuffle($resposta);
  for(var y = 0; y < $resposta.length; y++) {
    if($resposta[y].text() == respostaCorrecta) respostaCorrectaNum = y + 1;
  }

  for(var i = 0; i < $resposta.length; i++) {
    $corpoPergunta.append($resposta[i]);
  }
  return $corpoPergunta;
}

var mostrarPergunta = function(data) {
  if($(".corpoPergunta")) $(".corpoPergunta").remove();
  $(".wrapper").append(gerarPergunta(escolherPergunta(data)));
}

var escolherResposta = function(resposta) {
  if(resposta.innerHTML == respostaCorrecta) {
    $(resposta).addClass("btn-success").removeClass("btn-default");
  } else {
    $(resposta).addClass("btn-danger").removeClass("btn-default");
    $(".corpoPergunta").children().eq(respostaCorrectaNum).addClass("btn-success").removeClass("btn-default");
  }
  intervalo = true;
}

$(".wrapper").on("click", ".resposta", function() {
  if(intervalo) {
    intervalo = false;
    mostrarPergunta(data);
  } else {
    escolherResposta(this);
  }
});

mostrarPergunta(data);
