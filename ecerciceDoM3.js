// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
//for(var i = 0;i < journaux.length;i++){
//console.log(journaux[i]);
//}

document.getElementById("contenu").innerHTML += '<p> <a href = "https://lemonde.fr">https://lemonde.fr </a></p>';
document.getElementById("contenu").innerHTML += '<P><a href = "http://lefigaro.fr">http://lefigaro.fr</a></p>';
document.getElementById("contenu").innerHTML += '<P><a href = "http://liberation.fr">http://liberation.fr</a></p>';
// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];
document.getElementById("dictionnaire").innerHTML += '<dt><strong>Procrastination :</strong></dt>';
//var mot1Elt = document.createElement("dt"); 
//mot1Elt.id = "procrastination"; 
//mot1Elt.textContent = "procrastination"; 
//document.getElementById("dictionnaire").appendChild(mot1Elt); 
document.getElementById("dictionnaire").innerHTML += '<dd>Tendance pathologique à remettre systématiquement au lendemain</dd>';

document.getElementById("dictionnaire").innerHTML += '<dt><strong>Tautologie :</strong></dt>';
document.getElementById("dictionnaire").innerHTML += '<dd>Phrase dont la formulation ne peut être que vraie</dd>';

document.getElementById("dictionnaire").innerHTML += '<dt><strong>Oxymore :</strong></dt>';
document.getElementById("dictionnaire").innerHTML += '<dd>Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés</dd>';

var dtElt = document.querySelector("dt");
dtElt.style.color = "gray";
dtElt.style.margin = "20px";
dtElt.style.border = "solid";
// ...
dtElt.style.fontFamily = "verdana";
dtElt.style.backgroundColor = "blue";

var dicElt = getComputedStyle(document.getElementById("dictionnaire"));
console.log(dicElt.fontStyle); 
console.log(dicElt.color); 

