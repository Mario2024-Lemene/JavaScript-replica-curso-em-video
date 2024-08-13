const bt = document.querySelector("#criarTabela")
        const resp = document.querySelector("section")
        bt.addEventListener("click", ()=>{
            const num = Number(inNumero.value)
            resp.innerHTML = `<h2>Tabuada de ${num}</h2>`
            for(let i = 1; i<=10;i++){
                resp.innerHTML += `${num} X ${i} = <strong>${num*i}</strong><br>`
            }
        })