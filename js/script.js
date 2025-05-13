/* TYPING Animation */
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/* Sidebar */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
  sidebar = document.querySelector(".sidebar");
navTogglerBtn.addEventListener("click", () => {
  sidebarSectionTogglerBtn();
});
function sidebarSectionTogglerBtn() {
  sidebar.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
const bars = document.querySelectorAll(".skill-bar .bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute("data-skill");
      }
    });
  },
  { threshold: 0.5 }
);

bars.forEach((bar) => {
  observer.observe(bar);
});
