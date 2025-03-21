function contagem() {
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var resultado = document.getElementById('resultado')

  if (inicio.value === '' || fim.value === '' || passo.value === '') {
    resultado.innerHTML = `<strong>Impossível contar!</strong> <br/> Por favor, preencha todos os campos antes de iniciar a contagem.`
  } else if (passo.value === '0'){
    alert(`O campo Passo não pode receber o valor 0 (zero). Considerando valor informado no campo Início: ${inicio.value}`)
    passo = inicio
    var contar = Number(inicio.value)
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= Number(fim.value)) {
    resultado.innerHTML += ` ${contar} &#x1F449; `
    contar = contar + Number(passo.value)
    }
    resultado.innerHTML += ` &#x1F3F3;`
  } else {
    var contar = Number(inicio.value)
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= Number(fim.value)) {
    resultado.innerHTML += ` ${contar} &#x1F449; `
    contar = contar + Number(passo.value)
    }
    resultado.innerHTML += ` &#x1F3F3;`
  }
}
