let article = [
  ["cravate", 10],
  ["ceinture", 20],
  ["casquette", 30],
  ["echarpe", 15],
  ["foulard", 25],
];
const quantite = document.querySelector(".quantite1");
const prixTotal = document.querySelector(".prixtotal1");
const libelle = document.querySelector(".libelle1");
const prixUnitaire = document.querySelector(".prixunitaire1");
/* PREMIER ARTICLE */
libelle.addEventListener("change", (event) => {
  for (i = 0; i < article.length; i++) {
    for (j = 0; j < article[i].length; j++) {
      if (libelle.value == article[i][j]) {
        prixUnitaire.value = article[i][1];
        prixUnitaire.innerHTML = prixUnitaire.value;
      }
    }
  }
});
/* SECOND ARTICLE */
const quantite2 = document.querySelector(".quantite2");
const prixTotal2 = document.querySelector(".prixtotal2");
const libelle2 = document.querySelector(".libelle2");
const prixUnitaire2 = document.querySelector(".prixunitaire2");
libelle2.addEventListener("change", (event) => {
  for (i = 0; i < article.length; i++) {
    for (j = 0; j < article[i].length; j++) {
      if (libelle2.value == article[i][j]) {
        prixUnitaire2.value = article[i][1];
        prixUnitaire2.innerHTML = prixUnitaire2.value;
      }
    }
  }
});
/* TROISIEME ARTICLE */
const quantite3 = document.querySelector(".quantite3");
const prixTotal3 = document.querySelector(".prixtotal3");
const libelle3 = document.querySelector(".libelle3");
const prixUnitaire3 = document.querySelector(".prixunitaire3");
libelle3.addEventListener("change", (event) => {
  for (i = 0; i < article.length; i++) {
    for (j = 0; j < article[i].length; j++) {
      if (libelle3.value == article[i][j]) {
        prixUnitaire3.value = article[i][1];
        prixUnitaire3.innerHTML = prixUnitaire3.value;
      }
    }
  }
});
/* QUATRIEME ARTICLE */
const quantite4 = document.querySelector(".quantite4");
const prixTotal4 = document.querySelector(".prixtotal4");
const libelle4 = document.querySelector(".libelle4");
const prixUnitaire4 = document.querySelector(".prixunitaire4");
libelle4.addEventListener("change", (event) => {
  for (i = 0; i < article.length; i++) {
    for (j = 0; j < article[i].length; j++) {
      if (libelle4.value == article[i][j]) {
        prixUnitaire4.value = article[i][1];
        prixUnitaire4.innerHTML = prixUnitaire4.value;
      }
    }
  }
});
/* CINQUIEME ARTICLE */
const quantite5 = document.querySelector(".quantite5");
const prixTotal5 = document.querySelector(".prixtotal5");
const libelle5 = document.querySelector(".libelle5");
const prixUnitaire5 = document.querySelector(".prixunitaire5");
libelle5.addEventListener("change", (event) => {
  for (i = 0; i < article.length; i++) {
    for (j = 0; j < article[i].length; j++) {
      if (libelle5.value == article[i][j]) {
        prixUnitaire5.value = article[i][1];
        prixUnitaire5.innerHTML = prixUnitaire5.value;
      }
    }
  }
});
/* VALIDATION ET REMPLISSAGE AUTOMATIQUE */
const prixHT = document.querySelector(".ht");
const tva = document.querySelector(".tva");
const ttc = document.querySelector(".ttc");
const validation = document.querySelector(".valider");
validation.addEventListener("click", () => {
  prixTotal.value = quantite.value * prixUnitaire.value;
  prixTotal.innerHTML = prixTotal.value;
  if (quantite2.value > 0) {
    prixTotal2.value = quantite2.value * prixUnitaire2.value;
  } else {
    prixTotal2.value = "";
  }
  prixTotal2.innerHTML = prixTotal2.value;
  if (quantite3.value > 0) {
    prixTotal3.value = quantite3.value * prixUnitaire3.value;
  } else {
    prixTotal3.value = "";
  }
  prixTotal3.innerHTML = prixTotal3.value;
  if (quantite4.value > 0) {
    prixTotal4.value = quantite4.value * prixUnitaire4.value;
  } else {
    prixTotal4.value = "";
  }
  prixTotal4.innerHTML = prixTotal4.value;
  if (quantite5.value > 0) {
    prixTotal5.value = quantite5.value * prixUnitaire5.value;
  } else {
    prixTotal5.value = "";
  }
  prixTotal5.innerHTML = prixTotal5.value;
  /* PRIX HT */
  prixHT.value =
    prixTotal.value +
    prixTotal2.value +
    prixTotal3.value +
    prixTotal4.value +
    prixTotal5.value;
  prixHT.innerHTML = prixHT.value + " €";
  /* TVA */
  tva.value = prixHT.value * 0.2;
  tva.innerHTML = tva.value + " €";
  /* TTC */
  ttc.value = prixHT.value * 1.2;
  ttc.innerHTML = ttc.value + " €";
});

//---------VERSION TEMPS REEL /!\ ORDRE /!\-----------//
/*
let article = [
    ["cravate", 10],
    ["ceinture", 20],
    ["casquette", 30],
    ["echarpe", 15],
    ["foulard", 25]
];
const prixHt = document.querySelector('.ht');
const tva = document.querySelector('.tva');
const ttc = document.querySelector('.ttc');
let totalHt = 0;
let calculTva = 0;
let totalTtc = 0;
//PREMIERE LIGNE
const quantite = document.querySelector('.quantite1');
const prixTot = document.querySelector('.prixtotal1');
const libelle = document.querySelector('.libelle1');
const prixUnit = document.querySelector('.prixunitaire1');
libelle.addEventListener('change', (event) => {
    for (i = 0; i < article.length; i++) {
        for (j = 0; j < article[i].length; j++) {
            if (libelle.value == article[i][j]) {
                prixUnit.value = article[i][1]
            }
        }
    }
    prixTot.value = prixUnit.value * quantite.value;
    totalHt += prixTot.value;
    calculTva = totalHt * 0.20;
    totalTtc = totalHt + calculTva;
    ttc.innerHTML = totalTtc + ' €';
    prixHt.innerHTML = totalHt + ' €';
    tva.innerHTML = calculTva + ' €';
    prixUnit.innerHTML = prixUnit.value;
    prixTot.innerHTML = prixTot.value;
});
//DEUXIEME LIGNE
const quantite2 = document.querySelector('.quantite2');
const prixTot2 = document.querySelector('.prixtotal2');
const libelle2 = document.querySelector('.libelle2');
const prixUnit2 = document.querySelector('.prixunitaire2');
libelle2.addEventListener('change', (event) => {
    for (i = 0; i < article.length; i++) {
        for (j = 0; j < article[i].length; j++) {
            if (libelle2.value == article[i][j]) {
                prixUnit2.value = article[i][1]
            }
        }
    }
    prixTot2.value = prixUnit2.value * quantite2.value;
    totalHt += prixTot2.value;
    calculTva = totalHt * 0.20;
    prixHt.innerHTML = totalHt + ' €';
    tva.innerHTML = calculTva + ' €';
    totalTtc = totalHt + calculTva;
    ttc.innerHTML = totalTtc + ' €';
    prixUnit2.innerHTML = prixUnit2.value;
    prixTot2.innerHTML = prixTot2.value;
});
//TROISIEME LIGNE
const quantite3 = document.querySelector('.quantite3');
const prixTot3 = document.querySelector('.prixtotal3');
const libelle3 = document.querySelector('.libelle3');
const prixUnit3 = document.querySelector('.prixunitaire3');
libelle3.addEventListener('change', (event) => {
    for (i = 0; i < article.length; i++) {
        for (j = 0; j < article[i].length; j++) {
            if (libelle3.value == article[i][j]) {
                prixUnit3.value = article[i][1]
            }
        }
    }
    prixTot3.value = prixUnit3.value * quantite3.value;
    totalHt += prixTot3.value;
    calculTva = totalHt * 0.20;
    prixHt.innerHTML = totalHt + ' €';
    tva.innerHTML = calculTva + ' €';
    totalTtc = totalHt + calculTva;
    ttc.innerHTML = totalTtc + ' €';
    prixUnit3.innerHTML = prixUnit3.value;
    prixTot3.innerHTML = prixTot3.value;
});
//QUATRIEME LIGNE
const quantite4 = document.querySelector('.quantite4');
const prixTot4 = document.querySelector('.prixtotal4');
const libelle4 = document.querySelector('.libelle4');
const prixUnit4 = document.querySelector('.prixunitaire4');
libelle4.addEventListener('change', (event) => {
    for (i = 0; i < article.length; i++) {
        for (j = 0; j < article[i].length; j++) {
            if (libelle4.value == article[i][j]) {
                prixUnit4.value = article[i][1]
            }
        }
    }
    prixTot4.value = prixUnit4.value * quantite4.value;
    totalHt += prixTot4.value;
    calculTva = totalHt * 0.20;
    prixHt.innerHTML = totalHt + ' €';
    tva.innerHTML = calculTva + ' €';
    totalTtc = totalHt + calculTva;
    ttc.innerHTML = totalTtc + ' €';
    prixUnit4.innerHTML = prixUnit4.value;
    prixTot4.innerHTML = prixTot4.value;
});
//CIQUIEME LIGNE
const quantite5 = document.querySelector('.quantite5');
const prixTot5 = document.querySelector('.prixtotal5');
const libelle5 = document.querySelector('.libelle5');
const prixUnit5 = document.querySelector('.prixunitaire5');
libelle5.addEventListener('change', (event) => {
    for (i = 0; i < article.length; i++) {
        for (j = 0; j < article[i].length; j++) {
            if (libelle5.value == article[i][j]) {
                prixUnit5.value = article[i][1]
            }
        }
    }
    prixTot5.value = prixUnit5.value * quantite5.value;
    totalHt += prixTot5.value;
    calculTva = totalHt * 0.20;
    prixHt.innerHTML = totalHt + ' €';
    tva.innerHTML = calculTva + ' €';
    totalTtc = totalHt + calculTva;
    ttc.innerHTML = totalTtc + ' €';
    prixUnit5.innerHTML = prixUnit5.value;
    prixTot5.innerHTML = prixTot5.value;
});
*/
