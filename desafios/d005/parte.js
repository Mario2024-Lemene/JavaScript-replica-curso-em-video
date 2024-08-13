const bt = document.querySelector("#botao")
const resp = document.querySelector("#respostas")
bt.addEventListener("click", ()=>{
    const medida = Number(prompt(`Digite uma distância em metros (m)`))
    resp.innerHTML = `<h2>A distância de ${medida} metros, corresponde a.</h2>`
    resp.innerHTML += `<p>${(medida/1000).toFixed(3)} quilômetros (Km)</p>`
    resp.innerHTML += `<p>${(medida/100).toFixed(3)} hectômetros (hm)</p>`
    resp.innerHTML += `<p>${(medida/10).toFixed(3)} decâmetros (Dam)</p>`
    resp.innerHTML += `<p>${(medida*10).toFixed(1)} decímetros (dm)</p>`
    resp.innerHTML += `<p>${(medida*100)} centímetro (cm)</p>`
    resp.innerHTML += `<p>${(medida*1000)} milimetros (mm)</p>`
})