function contagem() {
  var inicio = document.getElementById('inicio'),
      fim = document.getElementById('fim'),
      passo = document.getElementById('passo'),
      resultado = document.getElementById('resultado'),
      contar = Number(inicio.value),
      nfim = Number(fim.value),
      npass = Number(passo.value)
      //msgstart = resultado.innerHTML = `Contando: <br/>`
  if (inicio.value === '' || fim.value === '' || passo.value === '') {
    resultado.innerHTML = `<strong>Impossível contar!</strong> <br/> Preencha todos os campos antes de iniciar a contagem.`
  } else if (npass === 0){
    alert(`O campo Passo com o valor 0 (zero). Considerando valor informado no campo Início: ${contar}`)
    passo = inicio
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= nfim) {
    resultado.innerHTML += `${contar} &#x1F449; `
    contar = contar + npass
    }
    resultado.innerHTML += ` &#x1F3F3;`
  } else {
    resultado.innerHTML = `Contando: <br/>`
    while (contar <= nfim) {
    resultado.innerHTML += `${contar} &#x1F449; `
    contar = contar + npass
    }
    resultado.innerHTML += ` &#x1F3F3;`
  }
}