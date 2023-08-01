const titre = document.querySelector(".titre");
const titre2 = "Menu";
const welcome = "Bienvenue";
titre.addEventListener("mouseenter", () => {
  titre.innerHTML = welcome;
});
titre.addEventListener("mouseout", () => {
  titre.textContent = titre2;
});

const affDate = document.getElementById("affichedate");
setInterval(() => {
  let d = new Date();
  let heures = d.getHours();
  let minutes = d.getMinutes();
  let secondes = d.getSeconds();
  secondes < 10 ? (secondes = "0" + secondes) : secondes;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  heures < 10 ? (heures = "0" + heures) : heures;
  let hc = heures + ":" + minutes + "." + secondes;
  affDate.innerHTML = hc;
}, 1000);
