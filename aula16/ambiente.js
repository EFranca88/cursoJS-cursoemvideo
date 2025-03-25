function parimpar(n) {
  if (n%2 == 0) {
     return `Par!`
  } else {
     return `Impar`
  }
}
console.log(parimpar(675))

function somar(n1=0,n2=0) {
  return n1 + n2
}
console.log(somar()) 
 
let e = function(a) {
  return a*10
}
console.log(e(21))

function fatorial(n) {
  var fatn = 1
  for (let c = n; c > 1 ; c--) {
     fatn *= c
  }
  return fatn
}
console.log(fatorial(10))

function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))