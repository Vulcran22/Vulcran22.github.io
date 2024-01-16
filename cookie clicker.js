var clicks = 0;
var multiplikator = 0;

function onClick() {
  clicks += 1;
  clicks += 1*multiplikator;
  document.getElementById("clicks").innerHTML = clicks;
}

function clickme() {
    multiplikator +=2;
    document.getElementById("multiplikator").innerHTML = multiplikator;
}

document.getElementById("Upgrade1").addEventListener("click",clickme);

