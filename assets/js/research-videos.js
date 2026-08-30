(() => {
  if (!window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll(".research-video").forEach((figure) => {
    const video = figure.querySelector(".research-video__media");
    if (!video) return;

    const previewTime = Number(video.dataset.previewTime);
    if (previewTime) {
      const showPreviewFrame = () => {
        video.currentTime = Math.min(previewTime, Math.max(0, video.duration - 0.1));
      };

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        showPreviewFrame();
      } else {
        video.addEventListener("loadedmetadata", showPreviewFrame, { once: true });
      }
    }

    figure.addEventListener("mouseenter", () => {
      if (video.ended && previewTime) video.currentTime = previewTime;
      video.play().catch(() => {});
    });

    figure.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
})();
