function calcular() {
    var txtnum1 = document.getElementById('txtnum1')
    var txtnum2 = document.getElementById('txtnum2')
    var num1 = Number(txtnum1.value)
    var num2 = Number(txtnum2.value)
    var soma = num1 + num2
    var sub = num1 - num2
    var mult = num1 * num2
    var div = num1 / num2
    var res = document.getElementById('res')

    res.innerHTML = `<p>A soma entre ${num1} e ${num2} é igual a ${soma}</p>`
    res.innerHTML += `<p>A subtração entre ${num1} e ${num2} é igual a ${sub}</p>`
    res.innerHTML += `<p>A multiplicação entre ${num1} e ${num2} é igual a ${mult}</p>`
    res.innerHTML += `<p>A divisão entre ${num1} e ${num2} é igual a ${div}</p>`
}