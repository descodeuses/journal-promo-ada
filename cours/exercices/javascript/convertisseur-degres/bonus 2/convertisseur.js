function convertirEnFarenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertirEnCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}

document.querySelector('#input-celsius').addEventListener('input', function() {
  let celsius = document.querySelector('#input-celsius').value;
  if (celsius.length > 0) {
    document.querySelector('#input-farenheit').value = convertirEnFarenheit(celsius);
  } else {
    document.querySelector('#input-farenheit').value = '';
  }
});

document.querySelector('#input-farenheit').addEventListener('input', function() {
  let farenheit = document.querySelector('#input-farenheit').value;
  if (farenheit.length > 0) {
    document.querySelector('#input-celsius').value = convertirEnCelsius(farenheit);
  } else {
    document.querySelector('#input-celsius').value = '';
  }
});
