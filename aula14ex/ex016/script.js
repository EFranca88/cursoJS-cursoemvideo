function contagem() {
  var inicio = document.getElementById('inicio'),
      fim = document.getElementById('fim'),
      passo = document.getElementById('passo'),
      resultado = document.getElementById('resultado'),
      contar = Number(inicio.value)
  if (inicio.value === '' || fim.value === '' || passo.value === '') {
    resultado.innerHTML = `<strong>Impossível contar!</strong> <br/> Por favor, preencha todos os campos antes de iniciar a contagem.`
  } else if (passo.value === '0'){
    alert(`O campo Passo não pode receber o valor 0 (zero). Considerando valor informado no campo Início: ${inicio.value}`)
    passo = inicio
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= Number(fim.value)) {
    resultado.innerHTML += `${contar} &#x1F449; `
    contar = contar + Number(passo.value)
    }
    resultado.innerHTML += ` &#x1F3F3;`
  } else {
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= Number(fim.value)) {
    resultado.innerHTML += `${contar} &#x1F449; `
    contar = contar + Number(passo.value)
    }
    resultado.innerHTML += ` &#x1F3F3;`
  }
}