/* ==========================================================================
   Hero carousel — builds slides from HERO_IMAGES (see home-images.js)
   Falls back to a plain gradient background if the array is empty so the
   page still looks intentional before photos are added.
   ========================================================================== */

function initHeroCarousel() {
  const slidesMount = document.getElementById("heroSlides");
  const dotsMount = document.getElementById("heroDots");
  if (!slidesMount) return;

  if (!HERO_IMAGES || HERO_IMAGES.length === 0) {
    slidesMount.innerHTML = `<div class="hero-slide active" style="background:linear-gradient(135deg,#5c3a1e,#a9752e);"></div>`;
    return;
  }

  slidesMount.innerHTML = HERO_IMAGES.map(
    (file, i) =>
      `<div class="hero-slide${i === 0 ? " active" : ""}" style="background-image:url('${HERO_IMAGE_FOLDER}${file}')"></div>`
  ).join("");

  if (HERO_IMAGES.length > 1 && dotsMount) {
    dotsMount.innerHTML = HERO_IMAGES.map(
      (_, i) => `<button class="${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join("");
  }

  const slides = slidesMount.querySelectorAll(".hero-slide");
  const dots = dotsMount ? dotsMount.querySelectorAll("button") : [];
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current] && dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current] && dots[current].classList.add("active");
  }

  function next() { goTo(current + 1); }

  function startAuto() {
    if (slides.length <= 1) return;
    timer = setInterval(next, 5500);
  }

  dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      clearInterval(timer);
      goTo(Number(dot.dataset.index));
      startAuto();
    })
  );

  startAuto();
}

document.addEventListener("DOMContentLoaded", initHeroCarousel);
