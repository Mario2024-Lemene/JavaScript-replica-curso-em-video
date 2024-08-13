const bt = document.querySelector("#btFatorial")
const resp = document.querySelector("#respostas")
bt.addEventListener("click", () => {
    const num = Number(inNumero.value)
    resp.innerHTML = `<h2>Calculando ${num}! </h2>`
    let fatorial = 1
    for (let i = num; i > 1; i--) {
        resp.innerHTML += `${i} x `
        fatorial *= i
    }
    resp.innerHTML += ` 1 = <strong>${fatorial}</strong>`
})