"use strict"

const button = document.getElementById("password");

const caracteresSpeciaux = "!@#$%^&*";

function validerMotDePasse(motDePasse) {
    let l = motDePasse.length >= 8;
    let maj = false;
    let min = false;
    let chiffre = false;
    let special = false;
    document.getElementById("error").textContent = "";

    for (const element of motDePasse) {
        if (element >= 'A' && element <= 'Z') {
            maj = true;
        } else if (element >= 'a' && element <= 'z') {
            min = true;
        } else if (element >= '0' && element <= '9') {
            chiffre = true;
        }

        if (caracteresSpeciaux.includes(element)) {
            special = true;
        }
    }

    if (!l) {
        console.log("Il faut au moins 8 caractères dans le mot de passe.");
        document.getElementById("error").textContent += "\nIl faut au moins 8 caractères dans le mot de passe.";
    }
    if (!maj) {
        console.log("Il n'y a pas de majuscule.");
        document.getElementById("error").textContent += "\nIl n'y a pas de majuscule.";
    }
    if (!min) {
        console.log("Il n'y a pas de minuscule.");
        document.getElementById("error").textContent += "\nIl n'y a pas de minuscule.";
    }
    if (!chiffre) {
        console.log("Il n'y a pas de chiffre.");
        document.getElementById("error").textContent += "\nIl n'y a pas de chiffre.";
    }
    if (!special) {
        console.log("Il n'y a pas de caractère spécial.");
        document.getElementById("error").textContent += "\nIl n'y a pas de caractère spécial.";
    }

    return l && maj && min && chiffre && special;
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const motDePasse = document.getElementById("motDePasse").value;
    if (validerMotDePasse(motDePasse)) {
        console.log("Le mot de passe est valide !");
    } else {
        console.log("Le mot de passe n'est pas valide.");
        console.log(motDePasse);
    }
});
