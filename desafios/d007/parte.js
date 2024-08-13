const cmb = Number(prompt("Antes de mais nada. Quanto esta a cotação do dólar agora"))
const bt = document.querySelector("#botao")
const resp = document.querySelector("section")
bt.addEventListener("click", ()=>{
    const valor = Number(prompt("Quatos R$ você tem na sua carteira?"))
    resp.innerHTML=`O valor ${valor} corresponde a ${(valor/cmb).toFixed(2)} dollares`
})