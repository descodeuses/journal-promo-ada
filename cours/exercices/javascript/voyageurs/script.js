document.querySelector('button').addEventListener('click', function() {
  let ageParDefaut = document.querySelector('#age-par-defaut').value;

  let inputAgeElements = document.querySelectorAll('.input-age');

  inputAgeElements.forEach(function(inputAgeElement) {
    inputAgeElement.value = ageParDefaut;
  });
});

document.querySelector('#checkbox-par-defaut').addEventListener('input', function() {
  let cocheParDefaut = document.querySelector('#checkbox-par-defaut').checked;

  let casesACocher = document.querySelectorAll('.passager-checkbox');

  casesACocher.forEach(function(caseACocher) {
    caseACocher.checked = cocheParDefaut;
  });
});

