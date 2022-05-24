var idade = 87;
console.log(`Você tem ${idade} anos...`)
if (idade < 16) {
    console.log('Portanto, não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Portanto, voto opcional');
} else {
    console.log('Portanto, voto obrigatório')
}