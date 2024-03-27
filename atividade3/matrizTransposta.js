const matrizOriginal = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const transposta = [];
for (let i = 0; i < matrizOriginal[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < matrizOriginal.length; j++) {
        transposta[i][j] = matrizOriginal[j][i];
    }
}

console.log("Matriz original:");
for (let linha of matrizOriginal) {
    console.log(linha.join("\t"));
}

console.log("\nMatriz transposta:");
for (let linha of transposta) {
    console.log(linha.join("\t"));
}