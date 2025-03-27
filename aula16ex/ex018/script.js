var myArray = [],
    number = document.getElementById('ntxt')
    
function numberTasks() { 
    let sel = document.getElementById('selAdd'),
        cont = document.getElementById('cont'),
        maior = document.getElementById('maior'),
        menor = document.getElementById('menor'),
        soma = document.getElementById('soma'),
        media = document.getElementById('media'),
        ultimo = document.getElementById('ultimo'),
        nAdd = Number(number.value)

    if ( nAdd <= 0  || nAdd >= 101 || myArray.indexOf(nAdd) != -1) {
        alert('Valor invalido ou já adicionado na lista!')
    } else {
        myArray.push(nAdd)

        let item = document.createElement('option'),
            index = myArray.length

        if (index != 0 && index >= 2) {
            item.text = `Valor ${nAdd} adicionado.`
            item.value = `tab${index}`
            sel.appendChild(item)
            cont.innerHTML = ''
            maior.innerHTML = ''
            menor.innerHTML = ''
            soma.innerHTML = ''
            media.innerHTML = ''
            ultimo.innerHTML = ''
        } else {
            sel.innerHTML = ''
            item.text = `Valor ${nAdd} adicionado.`
            item.value = `tab${index}`
            sel.appendChild(item)
        }     
    }
}

function contagemFinal() {
    if (myArray.length != 0) {
        let cont = document.getElementById('cont'),
            maior = document.getElementById('maior'),
            menor = document.getElementById('menor'),
            soma = document.getElementById('soma'),
            media = document.getElementById('media'),
            ultimo = document.getElementById('ultimo'),
            arrayCont = myArray.length,
            nMaior = 0, nMenor = 100, nSoma = 0, nMedia = 0 
        
        for (let index = 0; index < arrayCont; index++) {
            const element = myArray[index];
            if (element > nMaior) {
                nMaior = element   
            }
        }
        for (let index = 0; index < arrayCont; index++) {
            const element = myArray[index];
            if (element < nMenor) {
                nMenor = element   
            }
        }
        for (let index = 0; index < arrayCont; index++) {
            const element = myArray[index];
            nSoma += element
        }

        nMedia = nSoma / arrayCont

        cont.innerHTML = `Ao todo temos ${arrayCont} números cadastrados`
        maior.innerHTML = `O maior valor informado foi ${nMaior}`
        menor.innerHTML = `O menor valor informado foi ${nMenor}`
        soma.innerHTML = `Somando todos os valores, temos ${nSoma}`
        media.innerHTML = `A média dos valores digitados é ${nMedia}`
        ultimo.innerHTML = `O ultimo valor do array foi ${myArray[myArray.length - 1]}`
    } else {
        alert('Adicionar valor entre 1 e 100 antes de finalizar!')
    }    
}