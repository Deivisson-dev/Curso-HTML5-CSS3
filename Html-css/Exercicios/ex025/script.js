function calcIdade() {
    let anoAtual = new Date().getFullYear()
    idade.innerHTML = Number(anoAtual) - Number(ano.value)  
}