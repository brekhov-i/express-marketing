function scheduleBlock() {
  const block = document.querySelector(".resultsParticipants__carts");
  const btn = document.querySelector(".resultsParticipants__btn");

  const items = block.querySelectorAll('.resultsParticipants__cart');

  

  const viewCart = items.length >= 25 ? 25 : items.length;
  const viewCartMobile = items.length >= 5 ? 5 : items.length;
  let height = 0;

  

  const iter = window.innerWidth > 576 ? viewCart : viewCartMobile;
  const margin = + window.innerWidth > 576 ? 15 : 8;

  if(items.length < 25) {
    btn.style.display = "none";
    btn.style.margin = 0;
  }

  for(let i=0; i < iter; i++) {
    height = height + items[i].offsetHeight + margin;
  }

  block.style.maxHeight = height + "px";
  

  if (block && btn) {
    btn.addEventListener("click", () => {
      if (!block.classList.contains("open")) {
        block.classList.add("open");
        block.style.maxHeight = block.scrollHeight + "px";
        btn.style.display = "none";
        btn.style.margin = 0;
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
