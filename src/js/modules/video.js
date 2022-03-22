function video() {
  const videoBlocks = document.querySelectorAll(".video");

  if (!videoBlocks) return;

  videoBlocks.forEach((el) => {
    const btnPlay = el.querySelector(".video__play");
    const poster = el.querySelector("img");

    btnPlay.addEventListener("click", () => {
      const posterWrapper = el.querySelector(".video__poster");
      const srcVideo = el.getAttribute("data-videoSrc");
      const posterSrc = poster.getAttribute("src");

      if (!srcVideo) return;

      const video = document.createElement("video");
      video.setAttribute("src", srcVideo);
      video.setAttribute("controls", true);
      video.setAttribute("poster", posterSrc);
      video.play();

      posterWrapper.remove();

      el.append(video);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  video();
});
