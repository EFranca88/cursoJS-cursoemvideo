let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p){
        console.log('Engordou')
        this.peso += p // Auto referencia ao objeto
    }
}
amigo.engordar(2.5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)