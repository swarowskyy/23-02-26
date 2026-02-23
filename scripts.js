const texto=document.getElementById("texto")
const botao=document.getElementById("botao")
const cupom=document.getElementById("cupom")
const senha="dash15"

botao.addEventListener("click",()=>{
    if (cupom==senha){

        texto.textContent= "Você ganhou 10% de desconto "
    }else{ 
        texto.textContent="código inválido"
    }
    botao.textContent="resgatado."
});