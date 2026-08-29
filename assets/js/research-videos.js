(() => {
  if (!window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll(".research-video").forEach((figure) => {
    const video = figure.querySelector(".research-video__media");
    if (!video) return;

    figure.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    figure.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
})();
