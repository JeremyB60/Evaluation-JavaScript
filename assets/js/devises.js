//----------------Version 1---------------------//

const montant1 = document.querySelector('.montant1');
const montant2 = document.querySelector('.montant2');
const devise1 = document.querySelector('#devise1');
const devise2 = document.querySelector('#devise2');
const convertisseur = document.querySelector('#convertisseur')
convertisseur.addEventListener('click', () => {
    if (devise1.value == "euro" && devise2.value == "dollar") {
        montant2.value = montant1.value * 1.05;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "euro" && devise2.value == "livre") {
        montant2.value = montant1.value * 0.86;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "euro" && devise2.value == "yen") {
        montant2.value = montant1.value * 141.52;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "dollar" && devise2.value == "euro") {
        montant2.value = montant1.value * 0.95;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "dollar" && devise2.value == "yen") {
        montant2.value = montant1.value * 134.32;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "dollar" && devise2.value == "livre") {
        montant2.value = montant1.value * 0.82;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "livre" && devise2.value == "dollar") {
        montant2.value = montant1.value * 1.22;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "livre" && devise2.value == "yen") {
        montant2.value = montant1.value * 164.89;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "yen" && devise2.value == "dollar") {
        montant2.value = montant1.value * 0.0074;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "yen" && devise2.value == "euro") {
        montant2.value = montant1.value * 0.0071;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "yen" && devise2.value == "livre") {
        montant2.value = montant1.value * 0.0061;
        montant2.innerHTML = montant2.value;
    }
    else if (devise1.value == "livre" && devise2.value == "euro") {
        montant2.value = montant1.value * 1.17;
        montant2.innerHTML = montant2.value;
    }
    else
        alert('Verifiez vos devises !')
})

function alterner() {
    let temporaire = montant1.value;
    montant1.value = montant2.value;
    montant2.value = temporaire;
}

function effacer1() {
    montant1.value = '';
    montant2.value = '';

}//----------------Version 2---------------------//

const euro = document.querySelector("#euro");
const dollar = document.querySelector("#dollar");
const livre = document.querySelector("#livre");
const yen = document.querySelector("#yen");

euro.addEventListener("input", function () {
    convertir(this.id, this.value);
});
dollar.addEventListener("input", function () {
    convertir(this.id, this.value);
});
livre.addEventListener("input", function () {
    convertir(this.id, this.value);
});
yen.addEventListener("input", function () {
    convertir(this.id, this.value);
});

function convertir(id, valeur) {
    if (id == "euro") {
        dollar.value = valeur * 1.05 + ' $';
        livre.value = valeur * 0.86 + ' £';
        yen.value = valeur * 141.52 + '¥';
    } else if (id == "dollar") {
        euro.value = valeur * 0.95 + ' €';
        livre.value = valeur * 0.82 + ' £';
        yen.value = valeur * 134.32 + ' ¥';
    } else if (id == "livre") {
        euro.value = valeur * 1.17 + ' €';
        dollar.value = valeur * 1.22 + ' $';
        yen.value = valeur * 164.89 + ' ¥';
    } else {
        euro.value = valeur * 0.0071 + ' €';
        dollar.value = valeur * 0.0074 + ' $';
        livre.value = valeur * 0.0061 + ' £';
    }
}

function effacer() {
    euro.value = '';
    dollar.value = '';
    livre.value = '';
    yen.value = '';
}

