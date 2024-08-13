const bt = document.querySelector("#btContar")
const resp = document.querySelector("#respotas")
bt.addEventListener("click", () => {
    const inicio = Number(inInicio.value)
    const fim = Number(inFim.value)
    if (inicio < fim) {
        resp.innerHTML = `<h2>Contagem crescente ${inicio} ate ${fim}</h2>`
        for (let i = inicio; i <= fim; i++) {
            resp.innerHTML += `<span>${i} &#x1F449; </span>`
        }
    } else {
        resp.innerHTML = `<h2>Contagem decrescente de ${fim} ate ${inicio}</h2>`
        for (let i = inicio; i >= fim; i--) {
            resp.innerHTML += `<span>${i} &#x1F449; </span>`
        }
    }
    resp.innerHTML += ` &#x1F3C1;`
})