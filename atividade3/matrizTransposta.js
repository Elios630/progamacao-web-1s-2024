function transporMatriz(A) {

    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }
    return transposta;
}

const matrizOriginal = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transposta = transporMatriz(matrizOriginal);

console.log("Matriz original:");
for (let linha of matrizOriginal) {
    console.log(linha);
}

console.log("\nMatriz transposta:");
for (let linha of transposta) {
    console.log(linha);
}
