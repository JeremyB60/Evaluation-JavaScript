const resultat = document.querySelector(".cadran");
function afficher(touche) {
  virerlezero();
  resultat.innerHTML += touche;
}

function virerlezero() {
  resultat.innerHTML == 0 ? (resultat.innerHTML = " ") : resultat.innerHTML;
}

function effacer() {
  resultat.innerHTML = "0";
}

function pourcentage() {
  resultat.innerHTML = resultat.innerHTML / 100;
}

function resoudre() {
  let egal = eval(resultat.innerHTML);
  resultat.innerHTML = egal;
}
