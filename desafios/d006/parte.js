const bt = document.querySelector("#botao")
const resp = document.querySelector("#repostas")
bt.addEventListener("click", ()=>{
    const num = Number(prompt("Digite uma temperatura em *C (Celsius)"))
    const tmKelvin =num + 273
    const tmFahre = (num*1.8)+32
    resp.innerHTML =`<h2>A temperatura de ${num}, corresponde a...</h2>`
    resp.innerHTML += `<p>${tmKelvin.toFixed(2)}K (Kelvin)</p>`
    resp.innerHTML += `<p>${tmFahre.toFixed(2)}*F (Fahrenheit)</p>`
})