function calcular() {
    var baseCalc = document.getElementById('ntable'),
        restabuada = document.getElementById('tabuada')
    restabuada.innerHTML = ``
    if (baseCalc.value === '') {
        restabuada.innerHTML = `<strong>Impossível calcular!</strong> <br/> Por favor, preencha o campo <strong>Número</strong> antes de gerar a tabuada.`
    } else {
        for (let i = 1; i <= 10; i++) {
            let multiplicar = Number(baseCalc.value) * i
            restabuada.innerHTML += `${baseCalc.value} x ${i} = ${multiplicar} <br/>`
        } 
    }
}