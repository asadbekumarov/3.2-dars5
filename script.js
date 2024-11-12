const Elbtn = document.querySelector("button");
const Elres = document.querySelector(".result");
const Elinput = document.querySelector("input");
let magic = [
  "It is certain.",
  "Ask again later.",
  "Don't count on it.",
  "Yes, definitely!",
  "My sources say no.",
  "Outlook not so good.",
  "Signs point to yes.",
  "Better not tell you now.",
];

function random() {
  return magic[Math.floor(Math.random() * magic.length)];
}

Elbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (Elinput.value === "") {
    alert("Savolingizni kirting");
  } else {
    Elres.textContent = random();
    Elinput.value = "";
    setTimeout(() => {
      Elres.textContent = "";
    }, 3000);
  }
});
