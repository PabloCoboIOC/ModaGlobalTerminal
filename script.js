console.log('Hola');

function afegirContacte(nom) {
    if (!nom || nom.trim() === "") {
        alert("El nom del contacte no pot estar buit.");
        return;
    }
}
