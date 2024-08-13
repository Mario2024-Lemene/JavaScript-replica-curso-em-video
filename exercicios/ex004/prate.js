const bt1 = document.querySelector("#botao")
const resp = document.querySelector("p")
bt1.addEventListener("click", ()=>{
    const nome = prompt("Qual é o seu nome?")
    resp.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!&#x1F596</p>`
})