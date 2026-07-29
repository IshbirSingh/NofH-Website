/* ==========================================================================
   Gallery — renders GALLERY_IMAGES into a grid and powers the lightbox
   ========================================================================== */

function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const empty = document.getElementById("galleryEmpty");
  if (!grid) return;

  if (!GALLERY_IMAGES || GALLERY_IMAGES.length === 0) {
    grid.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }

  grid.innerHTML = GALLERY_IMAGES.map(
    (img, i) =>
      `<img src="${GALLERY_IMAGE_FOLDER}${img.file}" alt="${img.caption || "Notes of Happiness photo"}" data-index="${i}" loading="lazy" />`
  ).join("");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let current = 0;

  function open(index) {
    current = index;
    show();
    lightbox.classList.add("open");
  }
  function show() {
    const img = GALLERY_IMAGES[current];
    lightboxImg.src = `${GALLERY_IMAGE_FOLDER}${img.file}`;
    lightboxImg.alt = img.caption || "Notes of Happiness photo";
  }
  function close() { lightbox.classList.remove("open"); }
  function next() { current = (current + 1) % GALLERY_IMAGES.length; show(); }
  function prev() { current = (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; show(); }

  grid.querySelectorAll("img").forEach((el) =>
    el.addEventListener("click", () => open(Number(el.dataset.index)))
  );
  document.getElementById("lightboxClose").addEventListener("click", close);
  document.getElementById("lightboxNext").addEventListener("click", next);
  document.getElementById("lightboxPrev").addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

document.addEventListener("DOMContentLoaded", initGallery);
