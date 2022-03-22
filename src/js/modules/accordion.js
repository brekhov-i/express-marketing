function accordion() {
  const accordions = document.querySelectorAll(".accordion");

  if (accordions.length !== 0) {
    const oneElement = accordions[0];
    const controlOneElement = oneElement.querySelector(".accordion__control");
    const contentOneElement = oneElement.querySelector(".accordion__content");

    oneElement.classList.add("open");
    controlOneElement.setAttribute("aria-expanded", true);
    contentOneElement.setAttribute("aria-hidden", false);
    contentOneElement.style.maxHeight = contentOneElement.scrollHeight + 40 + 24 + "px";

    accordions.forEach((el) => {
      el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        if (!self.classList.contains("open")) {
          accordions.forEach((el) => {
            if (el.classList.contains("open")) {
              const control = el.querySelector(".accordion__control");
              const content = el.querySelector(".accordion__content");
              el.classList.toggle("open");
              control.setAttribute("aria-expanded", false);
              content.setAttribute("aria-hidden", true);
              content.style.maxHeight = null;
            }
          });
        }

        const control = self.querySelector(".accordion__control");
        const content = self.querySelector(".accordion__content");

        self.classList.toggle("open");

        // если открыт аккордеон
        if (self.classList.contains("open")) {
          control.setAttribute("aria-expanded", true);
          content.setAttribute("aria-hidden", false);
          content.style.maxHeight = content.scrollHeight + 40 + 24 + "px";
        } else {
          if (e.target === content) {
            self.removeAttribute("open");
          }
          control.setAttribute("aria-expanded", false);
          content.setAttribute("aria-hidden", true);
          content.style.maxHeight = null;
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  accordion();
});
