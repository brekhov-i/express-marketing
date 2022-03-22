function windowUp() {
  const btn = document.querySelector(".btnWindowUp");
  if (!btn) return;
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > window.innerHeight / 2)  {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener("click", () => {
    document.body.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  windowUp();
});
