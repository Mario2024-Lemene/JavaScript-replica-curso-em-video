const bt = document.querySelector("#botao")
bt.addEventListener("click",()=>{
    const produto = prompt("Que porduto você está comprando?")
    const preco = Number(prompt(`Quanto custa ${produto} que você está comprando`))
    const valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    alert(`Você comprou ${produto} que custou ${preco.toFixed(2)}.\nDeu R$ ${valor.toFixed(2)} em dinheiro e vai receber ${(valor-preco).toFixed(2)} de troco.\nVolte sempre`)
})