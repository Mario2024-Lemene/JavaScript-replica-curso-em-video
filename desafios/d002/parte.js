const bt = document.querySelector("#botao")
bt.addEventListener("click", ()=>{
    const nome = prompt("Qual é o seu nome?")
    const idade =  Number(prompt(`Olá, ${nome}! Quantos anos você tem?`))
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade`)
})