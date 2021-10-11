const toggle = document.querySelector("#switcher");
const doc = document.documentElement;
doc.setAttribute("data-theme", "dark");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  if (doc.getAttribute("data-theme") === "dark") {
    doc.setAttribute("data-theme", "light");
  } else {
    doc.setAttribute("data-theme", "dark");
  }
});
