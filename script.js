let numberI = document.querySelector("#numberi")
let numberF = document.querySelector("#numberf")
let numberP = document.querySelector("#pass")
let res = document.querySelector("#res")

function error(){
  res.innerHTML = "Não é possível contar"
  throw "Não foi informado o número ínico"
}

function count() {
  let n1 = Number(numberI.value)
  let n2 = Number(numberF.value)
  let pass = Number(numberP.value)

  if (numberI.value.length == 0){
    alert("Error. Por gentileza informe o número Início")
    error()
  }

  if (numberF.value.length == 0){
    alert("Error. Por gentileza informe o número Fim")
    error()
  }

  if (numberP.value.length == 0){
    alert("Error. Por gentileza informe o Passo")
    error()
  }

  if (pass <= 0) {
    alert("Passo Indevido. O passo será 1")
    pass = 1
  }

  res.innerHTML = ""

  if (n1 < n2) {
    for (let c = n1; c <= n2; c += pass) {
      res.innerHTML += ` ${c}`
    }
  }

  if (n1 > n2){
    for (let c = n1; c >= n2; c -= pass){
      res.innerHTML += ` ${c}`
    }
  }
}


