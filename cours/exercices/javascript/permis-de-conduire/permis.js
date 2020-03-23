function verifierLePermis(nom, age){
    if (age >= 18) {
    alert(`Bonjour ${nom} ! Vous pouvez passer le permis !`);
  } else if (age >= 16) {
    alert(`Bonjour ${nom} ! Vous pouvez vous entrainer en conduite accompagnée.`);
  } else {
    alert(`Bonjour ${nom} ! Vous êtes trop jeune pour passer votre permis. Il vous reste ${18 - age} années avant de passer le permis.`);
  }
};

document.querySelector('.verify').addEventListener('click', function() {
  let nom = document.querySelector('#nom').value;
  let age = document.querySelector('#age').value;
  verifierLePermis(nom, age);
});
