const bt = document.querySelector("#botao")
bt.addEventListener("click", ()=>{
    const num = Number(prompt("Digite um número inteiro qualquer"))
    alert(`Antes de ${num}, temos o número ${num-1}\nDepois de ${num}, temos o número ${num+1}`)
})