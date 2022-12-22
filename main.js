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
