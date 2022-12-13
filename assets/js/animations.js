const afficheDateHeure = document.querySelector(".dateHeure");
setInterval(() => {
    let date = new Date();

    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let jourSemaine = date.getDay();

    let jour = date.getUTCDate()
console.log(jour)
    let MOIS = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]
    let mois = date.getMonth();

    let annee = date.getFullYear();

    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    (secondes < 10) ? secondes = "0" + secondes : secondes;
    (minutes < 10) ? minutes = "0" + minutes : minutes;
    (heures < 10) ? heures = "0" + heures : heures;

    let heureComplete = heures + ":" + minutes + "." + secondes;

    let dateComplete = jours[jourSemaine] + " " + jour + " " + MOIS[mois] + " " + annee + "<br>";
    afficheDateHeure.innerHTML = dateComplete += heureComplete;
}, 1000);

// BULLES

function creerBulle() {
    const bulle = document.createElement('p');
    document.body.appendChild(bulle);
    bulle.classList.add("bulle");
    //taille des bulles
    const taille = Math.ceil(Math.random() * 200) + 200 + 'px';
    bulle.style.width = taille;
    bulle.style.height = taille;
    //position sur l'écran
    const postop = Math.ceil(Math.random() * 90) + '%';
    const posleft = Math.ceil(Math.random() * 80) + '%';
    bulle.style.top = postop;
    bulle.style.left = posleft;
    //shooter une bulle
    bulle.addEventListener('click', () => {
        bulle.remove();
    });
    //durée de vie de la bulle
    setTimeout(() => {
        bulle.remove();
    }, 5000);
}

/*CORRECTION AJOUT DE BOULE + VOIR FICHIER CSS*/
/*
const ajout = document.querySelector(".ajouter");
let n = 0;
let tab = ["green", "yellow", "red", "blue", "purple", "gray", "orange"]
function ajouterr() {
    const boule = document.createElement('div');
    boule.classList.add("ajoute");
    ajout.appendChild(boule);
    let i = Math.ceil(Math.random() * 6);
    boule.style.backgroundColor = tab[i];
    boule.addEventListener('click', () => {
        boule.remove();
    })
*/

//AGRANDIR REDUIRE

const plusGrand = document.querySelector('.grossir');
const plusPetit = document.querySelector('.reduire');
const texte = document.querySelector('.demonstration')
let c = 20;
function grossirTexte() {
    c += 5;
    texte.style.fontSize = c + 'px';
}
function reduireTexte() {
    c -= 5;
    texte.style.fontSize = c + 'px';
}

