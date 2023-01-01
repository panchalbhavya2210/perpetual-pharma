let day = new Date();

let hours = day.getHours();

let greetDayToUser = document.getElementById("greetDayToUser");

if (hours == 00) {
  greetDayToUser.innerHTML = "Good Morning";
} else if (hours > 06 && hours < 12) {
  greetDayToUser.innerHTML = "Good Morning";
} else if (hours > 12 && hours < 17) {
  greetDayToUser.innerHTML = "Good Afternoon";
} else if (hours > 17 && hours < 23) {
  greetDayToUser.innerHTML = "Good Evening";
}

let runWindSc = document.getElementById("runWindScroll");

runWindSc.addEventListener("click", () => {
  window.scrollTo({
    top: 605,
    behavior: "smooth",
  });
});

let medAccord = document.querySelectorAll(".medAccord");

for (let i = 0; i < medAccord.length; i++) {
  medAccord[i].addEventListener("click", () => {
    let accordionMainOne = document.querySelectorAll(".accordionMainOne");
    accordionMainOne[i].classList.toggle("accordToggle");

    let imgPlus = document.querySelectorAll(".imgPlus");

    imgPlus[i].classList.toggle("rotatePlus");
  });
}
