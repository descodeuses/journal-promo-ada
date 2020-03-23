function convertirEnFarenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertirEnCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}

document.querySelector('.bouton-convertir-en-farenheit').addEventListener('click', function() {
  let celsius = document.querySelector('#input-celsius').value;
  document.querySelector('#input-farenheit').value = convertirEnFarenheit(celsius);
});

document.querySelector('.bouton-convertir-en-celsius').addEventListener('click', function() {
  let farenheit = document.querySelector('#input-farenheit').value;
  document.querySelector('#input-celsius').value = convertirEnCelsius(farenheit);
});
