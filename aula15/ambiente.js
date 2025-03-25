num = [50, 86, 73, 37, 10]
console.log(num)

num[5] = 87
console.log(`O sexto valor é  ${num[5]}`)

num.push(2, 15, 20)
console.log(num)

console.log(`O vetor tem ${num.length} posições.`)

console.log(`O último valor é ${num[num.length - 1]}`)

console.log(num.sort())

console.log(num[1])
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(2))
console.log(num.indexOf(22))

myPos = num.indexOf(2)
if (myPos == -1) {
   console.log(`O valor não foi encontrado`)
} else {
   console.log(`O valor está na posição ${myPos}`);
}