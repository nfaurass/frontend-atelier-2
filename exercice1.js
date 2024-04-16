// Fonctions Constructeurs
function voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}
function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
    voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
}
function Ford(model, marque, annee, type, carburant, options) {
    voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
}

// Ajout des methodes et heritage
voiture.prototype.getModel = function () {
    return this.model;
};
voiture.prototype.getAnnee = function () {
    return this.annee;
};
Hyndai.prototype = Object.create(voiture.prototype);
Hyndai.prototype.constructor = Hyndai;
Hyndai.prototype.alarmer = function () {
    console.log("Alarmer la voiture Hyndai " + this.model + "!!");
}
Ford.prototype = Object.create(voiture.prototype);
Ford.prototype.constructor = Ford;

// Instanciation des objets
let nissan = new voiture("nissan", "x73", "2003", "SUV", "Diesel");
let Hyndaiss = new Hyndai("Hyndai", "Honda", 2023, "Sedan", "Diesel", "X0", 1);
let Fordss = new Ford("Ford", "Honda", 2012, "Sedan", "Essence", "X3", ['option1', 'option2']);
let voitures = [
    new voiture("Civic", "Honda", 2019, "Sedan", "Essence"),
    new voiture("Accord", "Honda", 2020, "Sedan", "Essence"),
    new voiture("Fusion", "Ford", 2017, "Sedan", "Hybride"),
];

// Triage des voitures et affichage
voitures.sort((a, b) => a.getAnnee() - b.getAnnee());
console.log(voitures);