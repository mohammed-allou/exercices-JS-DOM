var h1Stl = document.querySelector("h1");
h1Stl.style.fontStyle = "bolder";
h1Stl.style.fontSize = "10";

var divStl= document.getElementsByTagName("div");
for(var i=0;i<divStl.length;i++){ 
    console.log(divStl[i]);
divStl[i].style.textAlign = "justify";
divStl[i].style.backgroundColor = "red";
divStl[i].style.color = "white";
divStl[i].style.border = "solid black";
divStl[i].style.boxShadow = "10px 10px 0px";
divStl[i].style.borderRadius = "10px";
divStl[i].style.margin = "10px";

}

var cssElt = document.getElementById("cont");
cssElt.style.float = "right";
cssElt.style.marginTop = "150px";
cssElt.style.marginRight = "50px";

document.getElementById("infos").innerHTML += '<h2>Information sur élément</h2>';
document.getElementById("infos").innerHTML += '<li>Hauteur : 57.6 px</li>';
document.getElementById("infos").innerHTML += '<li>Longeur : 98.2345 px</li>';
var liElt = document.getElementsByTagName("li");
liElt[0].style.paddingLeft = "15px";
liElt[1].style.paddingLeft = "15px";
    