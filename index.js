
const linkContainer = document.querySelector(".link");
const display = document.getElementById("display");


linkContainer.addEventListener("click", (event) => {
  
  if (event.target.tagName === "A") {
    display.innerHTML =
      "Thank you for checking me out! I hope you followed me."; 
    alert("Please support me by following me. Thank you! click ok to continue");
  }
  
});

function Daylight() {
  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");

  sunIcon.style.display = "none";
  moonIcon.style.display = "block";

  const change = document.getElementById("bodycolor");
  change.style.backgroundColor = "white";

  document
    .querySelectorAll("h1, p, h4")
    .forEach((element) => (element.style.color = "black"));
}

function Nightlight() {
  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");

  sunIcon.style.display = "block";
  moonIcon.style.display = "none";

  const change = document.getElementById("bodycolor");
  change.style.backgroundColor = " black";
  document
    .querySelectorAll("h1, p, h4")
    .forEach((element) => (element.style.color = "white"));
}
