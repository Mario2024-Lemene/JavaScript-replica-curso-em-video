const bt = document.querySelector("#botao")
const resp = document.querySelector("section")
bt.addEventListener("click", ()=>{
    const prod = prompt("Qual é o produto que você está comprando?")
    const preco = Number(prompt(`Qual é o preço de ${prod}?`))
    const disconto = preco *(10/100)
    resp.innerHTML = `<h2>Calculando o desconto de 10% para ${prod} </h2>`
    resp.innerHTML += `<p>O preço era R$ ${preco.toFixed(2)} </p>`
    resp.innerHTML += `<p>Você acaba de ganhar R$ ${disconto.toFixed(2)}  de (-10%).</p>`
    resp.innerHTML+= `<p>No final, você vai pagar ${(preco-disconto).toFixed(2)} no produto ${prod}. </p> `
})