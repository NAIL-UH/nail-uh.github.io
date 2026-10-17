// NAIL Lab publication lists (Publications page, later the Research page).
// - "Graph" buttons open and close the entry's graph panel. The gem's common.js
//   handles the Abs and Bib panels the same way.
// - With reduced motion requested, video previews stay on their poster and get
//   native controls instead of autoplaying.
(function () {
  document.querySelectorAll("a.nail-graph-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var links = button.closest(".links");
      var scope = links ? links.parentElement : button.parentElement;
      var panel = scope ? scope.querySelector(".nail-graph.hidden") : null;
      if (!panel) return;
      var open = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video.nail-pub-video").forEach(function (video) {
      video.removeAttribute("autoplay");
      video.pause();
      video.controls = true;
    });
  }
})();
