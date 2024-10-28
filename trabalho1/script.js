document.getElementById('contar').addEventListener('click', function() {
    const frase = document.getElementById('frase').value;
    const contador = frase.replace(/[^a-zA-Z]/g, '').length; // Conta apenas letras
    document.getElementById('resultado').textContent = `Total de letras: ${contador}`;
});
