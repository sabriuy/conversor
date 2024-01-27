function convertir() {
    const cantidad = document.getElementById("amount").value;
    const deMoneda = document.getElementById("from").value;
    const aMoneda = document.getElementById("to").value;

    // Hacer la solicitud a la API
    fetch(`https://v6.exchangerate-api.com/v6/54797a8db51fabf62f23f275/latest/${deMoneda}`)
      .then(response => response.json())
      .then(data => {
        const tasaCambio = data.conversion_rates[aMoneda];
        const resultado = cantidad * tasaCambio;
        document.getElementById("resultado").innerHTML = `${cantidad} ${deMoneda} son ${resultado.toFixed(2)} ${aMoneda}`;
      })
      .catch(error => {
        console.error("Error al obtener la tasa de cambio:", error);
      });
  }