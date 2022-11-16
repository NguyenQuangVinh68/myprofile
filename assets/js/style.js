window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function changeIcon(item) {
  var icon = item.querySelector("#icon");
  icon.classList.toggle("fa-xmark");
  icon.classList.toggle("fa-bars-staggered");
}
