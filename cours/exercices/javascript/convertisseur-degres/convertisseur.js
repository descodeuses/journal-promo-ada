function convertirEnFarenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

document.querySelector('.bouton-convertir').addEventListener('click', function() {
  let celsius = document.querySelector('#input-celsius').value;
  let farenheit = convertirEnFarenheit(celsius);
  document.querySelector('#input-farenheit').value = farenheit;
});
