function scheduleBlock() {
  const block = document.querySelector(".schedule__list");
  const btn = document.querySelector(".schedule__btn");

  if(window.innerWidth > 576) return;

  const items = block.querySelectorAll('.list__item');

  const height = items[0].offsetHeight + 40 + items[1].offsetHeight;
  block.style.maxHeight = height + "px";
  console.log(items[0].offsetHeight);

  if (block && btn) {
    btn.addEventListener("click", () => {
      if (!block.classList.contains("open")) {
        block.classList.add("open");
        block.style.maxHeight = block.scrollHeight + "px";
        btn.style.display = "none";
      } else {
        block.classList.remove("open");
        block.style.maxHeight = null;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  scheduleBlock();
});
