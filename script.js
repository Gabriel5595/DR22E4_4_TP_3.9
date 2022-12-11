const btn = document.getElementById("captura");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    let capturaValor1 = document.getElementById("valor1");
    let valor1 = +capturaValor1.value;

    let capturaValor2 = document.getElementById("valor2");
    let valor2 = +capturaValor2.value;

    resSoma = valor1 + valor2;
    console.log(resSoma);
    texto.innerText = resSoma;
})