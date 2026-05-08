function resizeFrame(frame) {
  if (!frame.dataset.height) return;
  frame.style.height = frame.dataset.height + "px";
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("iframe[data-height]").forEach(resizeFrame);
});
