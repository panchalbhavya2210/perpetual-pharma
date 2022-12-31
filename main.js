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

// for (const clicker of medAccord) {
//   clicker.addEventListener("click", () => {
//     alert(1);
//   });
// }
const medAccord = document.querySelectorAll(".medAccord");
const accordMain = document.querySelectorAll(".accordionMainOne");

function letAccordBtn() {
  for (let i = 0; i < 18; i++) {
    let classNames = new Array();
    classNames[i] = accordMain[i].className;
    // console.log(classNames[i])
      accordMain[i].className = "accordionMainOne accordMain";

      // if (accordMain[i].classList.contains("accordToggle")) {
      //   accordMain[i].classList.remove("accordToggle");
      // } else {
      //   accordMain[i].classList.add("accordToggle");
      // }
    });
  }
}

medAccord.onclick = letAccordBtn();
