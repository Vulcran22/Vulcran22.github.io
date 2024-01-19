var clicks = 0;
var multiplikator = 0;s

function onClick() {
  clicks += 1;
  clicks += 1 * multiplikator;
  document.getElementById("clicks").innerHTML = clicks;
}

function clickme() {
  multiplikator += 2;
  document.getElementById("multiplikator").innerHTML = multiplikator;
}
document.getElementById("Upgrade1").addEventListener("click", clickme)


function cookiekosten() {
  kosten -= 100;
  document.getElementById("kosten").addEventListener.innerHTML = kosten;

  if (clicks < 100)
    document.getElementById("Upgrade1").disabled = true;
  else if (clicks > 100)
    document.getElementById("Upgrade1").disabled = false;
}
document.getAnimations("Upgrade1").addEventListener("click",cookiekosten)

