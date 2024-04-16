let Etudiant = {
    cne: null,
    nom: null,
    age: null,
    etudier: function () {
        return this.nom + " est en train d'etudier.";
    }
};
let professeur = {
    nom: null,
    age: null,
    cin: null,
    enseigner: function () {
        return this.nom + " est en train d'enseigner.";
    }
};

let prof = { nom: "Prof", age: 40, cin: "12345" };
let etudiants = [
    { nom: "A", prenom: "A", age: 24, cne: "CNEX" },
    { nom: "F", prenom: "H", age: 19, cne: "CNEX" },
    { nom: "B", prenom: "B", age: 26, cne: "CNEX" },
    { nom: "A", prenom: "G", age: 21, cne: "CNEX" }
];

etudiants.sort((a, b) =>
    a.nom.localeCompare(b.nom) !== 0 ? a.nom.localeCompare(b.nom) :
        a.prenom.localeCompare(b.prenom)
);
console.log(etudiants);