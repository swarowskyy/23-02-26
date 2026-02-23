const texto=document.getElementById("texto")
const botao=document.getElementById("botao")
const senha="dash15"

botao.addEventListener("click",()=>{
    const codigo = document.getElementById("cupom").value.trim()
    if (codigo==senha){
        texto.textContent= "Você ganhou 10% de desconto em sua compra 🤩 "
    }else{ 
        texto.textContent="código inválido"
        botao.textContent="resgatar brinde"

    }
  
});