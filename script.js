// Récupération du bouton par son sélecteur CSS pour détecter les clics
let btnExo1 = document.querySelector("#btnExo1");
// Récupération du champ de saisie par sélecteur CSS pour lire la valeur entrée par l'utilisateur
let inputExo1 = document.querySelector("#inputExo1");
// Récupération de l'élément où afficher le résultat par sélecteur CSS
let resultatExo1 = document.querySelector("#resultatExo1");

// Ajout d'un écouteur d'événements de type "click" au bouton
btnExo1.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre = Number(inputExo1.value);
    let signe; // Variable pour stocker le signe du nombre

    // Vérification de la valeur du nombre
    if (nombre == 0) {
        signe = "est 0";
    }
    else if (nombre > 0) {
        signe = "est positif";
    }
    else {
        signe = "est négatif";
    }

    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(signe);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo1.innerHTML = `Le nombre ${nombre} ${signe}`;
});


