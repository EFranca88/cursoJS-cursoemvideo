function calcular() {
    var num = document.getElementById('ntable'),
        tab = document.getElementById('rl')
    if (num.value.length == 0) {
        alert(`Impossível calcular! Por favor, preencha o campo Número antes de gerar a tabuada.`)
    } else {
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${i} = ${Number(num.value) * i}`
            item.value = `tab${i}`
            tab.appendChild(item)// utilizado para adicionar um novo elemento ao final da lista de filhos de um elemento pai
        } 
    }
}