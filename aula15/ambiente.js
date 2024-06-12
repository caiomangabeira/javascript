let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()

/*
for(let c = 0; c <= num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
*/

for(let c in num) {
    console.log(num[c])
}

console.log(num.indexOf(0))