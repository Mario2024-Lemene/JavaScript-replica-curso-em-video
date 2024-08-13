const bt = document.querySelector("#botao")
const resp = document.querySelector("section")
bt.addEventListener("click", ()=>{
    const nome = prompt("Qual é o nome do funcionário")
    const salario = Number(prompt("Qual é o salário de "+nome+ "?"))
    const p100 = Number(prompt(`O salário de ${nome} vai ser ajustado em qual percentagem?`))
    const aumento = salario *(p100/100)
    resp.innerHTML = `<h2>${nome} recebeu um aumento salrial!</h2>`
    resp.innerHTML += `<p>com um aumento de ${p100}%, o salario vai aumentar R$ ${aumento.toFixed(2)} no próximo mês</p>`
    resp.innerHTML += `<p>E a partir dai, ${nome} vai passar a ganhar ${(aumento+salario).toFixed(2)}</p>`
})