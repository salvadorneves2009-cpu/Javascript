let nombreSecret = false;
let partieEnCours = false;
let essaisRestant = false;

document.getElementById("btnValider").addEventListener("click", (evenement) => {
    evenement.preventDefault();
    const min = document.getElementById("plageMin".value);
    const max = document.getElementById("plageMax").value;
    const essaisMax = document.getElementById("essaisMax").value;
    const proposition = document.getElementById("proposition").value;
    const error = document.getElementById("error");
    const statut = document.getElementById("statut");

    // error.textContent = "";

    // if (min >= max || essaisMax < 1 || proposition < min || proposition > max) {
    //     error.textContent = "Erreur : données incohérentes.";
    //     return error;
    // }

    if (!partieEnCours) {
        nombreSecret = Math.floor(Math.random() * (max - min + 1)) + min;
        essaisRestants = essaisMax;
        partieEnCours = true;
    }

    essaisRestants--;

    if (proposition === nombreSecret) {
        statut.textContent = "Félicitations ! Le secret était " + nombreSecret + ".";
        partieEnCours = false;
    } else if (essaisRestants === 0) {
        statut.textContent = "Perdu ! Le secret était " + nombreSecret + ".";
        partieEnCours = false;
    } else {
        if (proposition < nombreSecret) {
            statut.textContent = "Le nombre secret est plus grand. Essais restants : " + essaisRestants;
        } else {
            statut.textContent = "Le nombre secret est plus petit. Essais restants : " + essaisRestants;
        }
    }
});



