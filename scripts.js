// Refatoração para POO
class Parquimetro {
    constructor(valorInputId, resultadoId) {
        this.valorInput = document.getElementById(valorInputId);
        this.resultado = document.getElementById(resultadoId);
        this.valorInput.addEventListener('input', () => this.calcularTempo());
    }

    calcularTempo() {
        const valor = parseFloat(this.valorInput.value);
        let tempo = 0;
        let troco = 0;

        if (isNaN(valor)) {
            this.resultado.innerText = '';
            return;
        }

        if (valor >= 3.00) {
            tempo = 120;
            troco = valor - 3.00;
            this.resultado.innerText = `Você pode estacionar por 120 minutos. Seu troco é R$ ${troco.toFixed(2)}`;
            return;
        } else if (valor >= 1.75) {
            tempo = 60;
        } else if (valor >= 1.00) {
            tempo = 30;
        } else {
            this.resultado.innerText = 'Valor insuficiente para estacionar.';
            return;
        }
        this.resultado.innerText = `Você pode estacionar por ${tempo} minutos.`;
    }
}

// Inicializa o parquímetro
new Parquimetro('valor', 'resultado');

document.getElementById('btnCalcular').addEventListener('click', function() {
    document.getElementById('valor').dispatchEvent(new Event('input'));
});