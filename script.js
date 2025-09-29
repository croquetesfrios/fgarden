const menu = document.getElementById("hamburger-menu");
const toggleBtn = document.querySelector(".fa-bars");
const closeBtn = document.getElementById("close-btn");

toggleBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const dropdownBtn2 = document.querySelector(".dropdown-btn2");
const dropdown2 = document.querySelector(".dropdown2");

dropdownBtn2.addEventListener("click", () => {
  dropdown2.classList.toggle("open");
});

// Dropdown desktop (click para abrir/fechar)
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // evita fechar imediatamente
  dropdown.classList.toggle("open");
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});
