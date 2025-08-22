const buttons = document.querySelectorAll(".sidebar button");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // add active to clicked button + section
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// Show first section by default
document.querySelector(".sidebar button").classList.add("active");
document.querySelector(".section").classList.add("active");
