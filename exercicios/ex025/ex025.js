const bt = document.querySelector("#botao")
const resp = document.querySelector("section")
bt.addEventListener("click", ()=>{
    const num = Number(inNumero.value)
    resp.innerHTML = `<h2>Contando de 0 ate ${num}</h2>`
    for(let i = 0; i<=num; i++){
        resp.innerHTML += `<span>${i} &#x1F449;</span>`
    }
    resp.innerHTML += ` &#x1F3C1;`
})