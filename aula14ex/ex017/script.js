function calcular() {
    var base = document.getElementById('ntable'),
        res = document.getElementById('tabuada'),
        num = Number(base.value)
    res.innerHTML = ``
    if (base.value === '') {
        res.innerHTML = `<strong>Impossível calcular!</strong> <br/> Por favor, preencha o campo <strong>Número</strong> antes de gerar a tabuada.`
    } else {
        for (let i = 1; i <= 10; i++) {
            let mult = num * i
            res.innerHTML += `${num} x ${i} = ${mult} <br/>`
        } 
    }
}