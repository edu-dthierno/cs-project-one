// Réponses
let q1 = "vrai";
let q2 = "vrai";
let q3 = "faux";

// Fonction correspondante => vérifient si ce que l'utilisateur à renter est juste.
function testA(element) {
  if (element.value == q1) {
    document.getElementById("indicationA").innerText = "correct!";
  } else {
    document.getElementById("indicationA").innerText = "faux!";
  }
}

function testB(element) {
    if (element.value == q2) {
      document.getElementById("indicationB").innerText = "correct!";
    } else {
      document.getElementById("indicationB").innerText = "faux!";
    }
  }


function testC(element) {
  if (element.value == q3) {
    document.getElementById("indicationC").innerText = "correct!";
  } else {
    document.getElementById("indicationC").innerText = "faux!";
  }
}