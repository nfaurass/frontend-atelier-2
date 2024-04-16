/*
Définir   une   classe  Vecteur2D  avec   un   constructeur
fournissant   les   coordonnées   par   défaut   d’un
vecteur du plan (par exemple : x = 0 et y = 0). 
*/
class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    // Enrichissez la classe Vecteur2D précédente en lui ajoutant
    // une méthode d’affichage
    afficher() {
        console.log("( x:" + this.x, ", y:" + this.y + " )");
    }
    // et une méthode de surcharge d’addition de deux vecteurs du plan
    additionner(vecteur) {
        this.x += vecteur.x;
        this.y += vecteur.y;
    }
}

/*
Dans le programme principal, instanciez un Vecteur2D sans paramètre,
un Vecteur2D avec ses deux paramètres, et affichez-les.
*/
let preVec = new Vecteur2D();
let deuVec = new Vecteur2D(3, 6);
let troVec = new Vecteur2D(7, 4);
console.log("SANS PARAMETRES", "x:" + preVec.x, ", y:" + preVec.y);
console.log("AVEC PARAMETRES", "x:" + deuVec.x, ", y:" + deuVec.y);

preVec.afficher();
deuVec.afficher();
troVec.afficher();

deuVec.additionner(troVec);
deuVec.afficher();

/*
Dans le programme principal, instanciez deux Vecteur2D,
affichez-les et affichez leur somme. 
*/
let quaVec = new Vecteur2D(2, 9);
let cinVec = new Vecteur2D(7, 10);
quaVec.afficher();
cinVec.afficher();
quaVec.additionner(cinVec);
quaVec.afficher();

/*
Définir une classe Rectangle avec un constructeur donnant des valeurs
(longueur et largeur) par défaut et un attribut nom = "rectangle"
*/
class Rectangle {
    constructor(long = 0, larg = 0, nom = "rectangle") {
        this.long = long;
        this.larg = larg;
        this.nom = nom;
    }
    // une méthode d’affichage
    afficher() {
        console.log("( Nom:" + this.nom + ", Long:" + this.long + ", Larg:" + this.larg + " )");
    }
    // une méthode surface renvoyant la surface d’une instance.
    surface() {
        return this.larg * this.long;
    }
}
/*
Définir une classe Carre héritant de Rectangle et qui surcharge
l’attribut d’instance : nom = "carré". 
*/
class Carre extends Rectangle {
    constructor(x = 0, nom = "carré") {
        super(x, x, nom);
    }
}

/* Dans le programme principal, instanciez
un Rectangle et un Carre et affichez-les.
*/
let preRec = new Rectangle(5, 7);
let preCar = new Carre(5);
preRec.afficher();
preCar.afficher();


/*
Définir une classe Point avec un constructeur fournissant les
coordonnées par défaut d’un point du plan
(par exemple : x = 0.0 et y = 0.0).
*/
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

/*
Définir une classe Segment dont le constructeur possède
quatre paramètres : deux pour l’origine et deux pour l’extrémité.
Ce constructeur définit deux attributs : orig et extrem,
instances de la classe Point. De cette manière, vous concevez une classe
composite :
la classe Segment est composée de deux instances de la classe Point
*/
class Segment {
    constructor(ox = 0, oy = 0, ex = 0, ey = 0) {
        this.orig = new Point(ox, oy);
        this.extrem = new Point(ex, ey);
    }
}

const preSeg = new Segment(1, 2, 4, 6);