const numeros = [0 ,1, 2, 3, 4, 5, 6, 7, 8]
numeros.forEach(numero => {
    numero % 2 == 0? console.log(`${numero} é par`): console.log(`${numero} é ímpar`)
})