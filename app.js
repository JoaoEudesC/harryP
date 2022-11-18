//modulo pombo de ouro

var voar = document.getElementById("voa")

voar.addEventListener("click", capturar)

function capturar(){

voar.src ='pomboreserva.gif'
alert("sorte de principiante, voce acaba de capturar o pombo de ouro")



}


//modulo mapa do maroto


var mapa = document.getElementById("mapa")

mapa.addEventListener("click", maroto)

function maroto(){
mapa.innerHTML="isto é contra as regras"

}


//modulo de poçoes


var poçao = document.getElementById("poçoes")



poçao.addEventListener("click" , mudar)

function mudar (){

var nome1 =  prompt("como voce se chama ?")

prompt(nome1 + ",  Qual o tipo de caldeirão utilizado pelos alunos dos primeiros anos? ") // 1 pergunta
alert("voce acertou se respondeu: ESTANHO")//1 resposta

prompt(nome1 + ",  A Seca Desinflante é um antídoto para qual poção? ") // 2 pergunta
alert("voce acertou se respondeu: SOLUÇÃO DE INCHAÇO")//2 resposta

prompt(nome1 + ",  Qual poção dá ao bebedor uma sorte incrível? ") // 3 pergunta
alert("voce acertou se respondeu: FELIX FELICIS")//3 resposta

prompt(nome1 + ",  Qual é o soro da verdade mais poderoso? ") // 4 pergunta
alert("voce acertou se respondeu: VERITASERUM")//4 resposta

alert(`parabens  ${nome1}!!!, você completou o modulo de Poções`)

}



//modulo historia da magia 


var historia = document.getElementById("historia")

historia.addEventListener("click" , historiar)

function historiar(){

var nome2 = prompt("como voce se chama ")

prompt(nome2 + ",  O Congresso Medieval de Bruxos Europeus concede qual prêmio?")
alert("voce acertou se respondeu: PREMIO DE BRAVURA CONTRA ANIMAIS FANTASTICOS ")

prompt(nome2 + ",  O Congresso Medieval de Bruxos Europeus tem relação com qual convenção? ")
alert("voce acertou se respondeu: CONVENÇÃO INTERNACIONAL DE BRUXOS ")

prompt(nome2 + ", Quando o Código de Conduta do Lobisomem foi desenvolvido? ")
alert(" voce acertou se respondeu: 1637")

prompt(nome2 + ", Qual é a marca registrada de Godric Gryffindor? ")
alert("voce acertou se respondeu: ESPADA ")

alert(` parabens ${nome2}!!!, você completou o modulo de Historia da Magia`)


}




//modulo feitiços


var feitiços = document.getElementById("feitiços")

feitiços.addEventListener("click", feitiço)

function feitiço(){

var nome3 = prompt("como voce se chama ")

prompt(nome3 + ",  Para que se usa o feitiço Alohomora?")
alert("voce acertou se respondeu: ABRIR UMA PORTA ")

prompt(nome3 + ",  O que o encantamento Lumos fornece? ")
alert("voce acertou se respondeu: LUZ ")

prompt(nome3 + ", Qual o feitiço utilizado para diminuir objetos? ")
alert(" voce acertou se respondeu: REDUCTO")

prompt(nome3 + ", Qual feitiço fornece proteção contra Dementadores? ")
alert("voce acertou se respondeu: EXPECTO PATRONUM ")

alert(` parabens ${nome3}!!!, você completou o modulo de Feitiços`)


}









//modulo de criaturas magicas




var criaturas = document.getElementById("criaturas")

criaturas.addEventListener("click" , criatura)

function criatura(){

var nome4 = prompt("como voce se chama ")

prompt(nome4 + ",  Acromântula é o nome para uma versão maior de qual criatura?")
alert("voce acertou se respondeu: ARANHA ")

prompt(nome4 + ",  O veneno de lesmalenta é uma das substâncias que matam qual espécie invasiva? ")
alert("voce acertou se respondeu: TOLETES ")

prompt(nome4 + ", Quem foi a primeira bruxa ou bruxo a criar um basilisco? ")
alert(" voce acertou se respondeu: HERPO, O SUJO")

prompt(nome4 + ", Qual dragão não é nativo da Grã-Bretanha? ")
alert("voce acertou se respondeu: O METEORO CHINÊS ")

alert(` parabens ${nome4}!!!, você completou o modulo de Criaturas Magicas`)


}








//modulo de advinhação





var advinhaçao = document.getElementById("advinhaçao")

advinhaçao.addEventListener("click", advinhar)

function advinhar(){


var nome5 = prompt("como voce se chama ")

prompt(nome5 + ",   Qual NÃO é uma das linhas da palma da mão que lemos na Quiromancia?")
alert("voce acertou se respondeu:  A LINHA DO TEMPO ")

prompt(nome5 + ",  Qual é o uso aceitável da Bola de Cristal? ")
alert("voce acertou se respondeu: PARA ADVINHAR O FUTURO ")

prompt(nome5 + ", O que usamos na Xilomancia? ")
alert(" voce acertou se respondeu: GALHOS")

prompt(nome5 + ", Quem escreveu o Oráculo dos Sonhos? ")
alert("voce acertou se respondeu: INIGO IMAGO ")

alert(` parabens ${nome5}!!!, você completou o modulo de Criaturas Magicas`)



}










//modulo defesa contra as artes das trevas







var trevas = document.getElementById("defesa")

trevas.addEventListener("click" , defesa)

function defesa(){


var nome6 = prompt("como voce se chama ")

prompt(nome6 + ",   Que tipo de Ghoul é capaz de se disfarçar?")
alert("voce acertou se respondeu:  GHOLS CAMALEÕES ")

prompt(nome6 + ",  Qual é o termo para um objeto feito com um fragmento da alma de um mago? ")
alert("voce acertou se respondeu: HORCRUX")

prompt(nome6 + ", O que a Azaração do Tropeço faz com a vítima? ")
alert(" voce acertou se respondeu: CAIR")

prompt(nome6 + ", Qual é o encantameto para a Azaração da Língua Presa? ")
alert("voce acertou se respondeu: : MIMBLEWIMBLE ")

alert(` parabens ${nome6}!!!, você completou o modulo de Defesa contra as Artes das Trevas`)

}





//mudança de cor  div/grifinoria

var b = document.getElementById("grifinoria")

b.addEventListener("mouseenter" , change)

function change(){

b.style.backgroundColor="rgb(235, 72, 72)"

}


b.addEventListener("mouseleave" , grifinoria)

function grifinoria(){
b.style.backgroundColor= " rgba(165, 164, 164, 0.788)"
}






//mudança de cor div/soncerina


var s = document.getElementById("soncerina")

s.addEventListener("mouseenter" , soncerina)

function soncerina(){
s.style.backgroundColor = "rgb(134, 248, 134)"

}


s.addEventListener("mouseleave", trocar)

function trocar(){
s.style.backgroundColor = "rgba(165, 164, 164, 0.788)"
}




//mudança de cor  div/corvinal 

var c = document.getElementById("corvinal")

c.addEventListener("mouseenter" , color)

function color(){
c.style.backgroundColor="rgb(36, 113, 175)"
}


c.addEventListener("mouseleave", corvinal)
function corvinal(){
c.style.backgroundColor="rgba(165, 164, 164, 0.788)"

}


//mudança de cor div/lufa


var l = document.getElementById("lufa")

l.addEventListener("mouseenter", texugo)

function texugo (){
l.style.backgroundColor ="rgb(247, 247, 96)"
}

l.addEventListener("mouseleave",lufa)

function lufa(){

l.style.backgroundColor="rgba(165, 164, 164, 0.788)"
}




//funçao do icone de x do menu de navegaçao



let porta = document.getElementById("door")
let fechar = document.getElementById("fechar")
let header = document.getElementById("pombo")

fechar.addEventListener("click" , ()=>{
    header.style.display="none"
    porta.style.display="block"
})


porta.addEventListener("click", ()=>{
    header.style.display="block"
    porta.style.display="none"
})