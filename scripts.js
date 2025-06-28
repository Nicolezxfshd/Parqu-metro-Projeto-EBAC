function calcularTempo() {
    const valor = parseFloat(document.getElementById('valor').value);
    let tempo = 0;
    let troco = 0;

    if (valor >= 3.00) {
        tempo = 120; // 120 minutos
        troco = valor - 3.00;
        document.getElementById('resultado').innerText = `Você pode estacionar por 120 minutos. Seu troco é R$ ${troco.toFixed(2)}`;
        return;
    } else if (valor >= 1.75) {
        tempo = 60; // 60 minutos
    } else if (valor >= 1.00) {
        tempo = 30; // 30 minutos
    } else {
        document.getElementById('resultado').innerText = 'Valor insuficiente para estacionar.';
        return;
    }

    document.getElementById('resultado').innerText = `Você pode estacionar por ${tempo} minutos.`;
}

document.getElementById('valor').addEventListener('input', calcularTempo);