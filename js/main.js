const menu = document.body.querySelector(".menu");
const menuBtn = document.body.querySelector(".toggle button");

menuBtn.addEventListener("click", () => {
  if (menu.style.height === "210px") {
    menu.style.height = "0px";
  } else {
    menu.style.height = "210px";
  }
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.style.height = "0px";
  }
});
