/* ==========================================================================
   Notes of Happiness — shared header/footer + nav behaviour
   Edit LOGO_PATH below once you've added the logos file to images/logos/
   ========================================================================== */

const LOGO_PATH = "images/logos/NofH Logo.png";
const INSTAGRAM_URL = "https://www.instagram.com/notes_of_happiness_az/";
const CONTACT_EMAIL = "nofh.arizona@gmail.com";

const NAV_LINKS = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About", href: "about.html", key: "about" },
  { label: "Blog", href: "blog.html", key: "blog" },
  { label: "Gallery", href: "gallery.html", key: "gallery" },
  { label: "Get Involved", href: "get-involved.html", key: "get-involved" },
  { label: "Support", href: "support.html", key: "support" },
  { label: "Contact", href: "contact.html", key: "contact" },
];

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const current = document.body.dataset.page;

  const links = NAV_LINKS.map((link) => {
    const isCurrent = link.key === current;
    return `<a href="${link.href}" data-nav="${link.key}" ${isCurrent ? 'aria-current="page"' : ""}>${link.label}</a>`;
  }).join("");

  mount.innerHTML = `
    <div class="nav">
      <a href="index.html" class="nav-logo">
        <img src="${LOGO_PATH}" alt="Notes of Happiness logo" />
        <span style = "font-size: 30px; margin-left: 15px;" class = "navTitle">Notes of Happiness</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" id="navLinks">${links}</nav>
    </div>
  `;

  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="${LOGO_PATH}" alt="Notes of Happiness logo" />
            <span>Notes of Happiness</span>
          </div>
          <p class="footer-tagline">Spreading happiness, one note at a time — free violin performances for seniors, veterans, and children across the Phoenix community.</p>
          <a class="footer-social" href="${INSTAGRAM_URL}" style = "font-weight: bold; font-size: 16px;" target="_blank" rel="noopener">Follow along on Instagram &rarr;</a>
        </div>
        <div>
          <div class="footer-heading">Explore</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="gallery.html">Gallery</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Reach Out</div>
          <ul class="footer-links">
            <li><a href="support.html">Support Us</a></li>
            <li><a href="get-involved.html">Get Involved</a></li>
            <li><a href="contact.html">Book a Performance</a></li>
            <li><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Notes of Happiness. A 501(c)(3) nonprofit based in Phoenix, AZ.</span>
        <span>Founded by Gunayan Kaur &amp; Mayal Kaur, Website by Ishbir Singh</span>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});

/* ------------------ AOS (Animate On Scroll) integration ------------------ */
function addAos(selector, animation = "fade-up", stagger = 0) {
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => {
    if (!el.hasAttribute("data-aos")) {
      el.setAttribute("data-aos", animation);
      if (stagger) el.setAttribute("data-aos-delay", String(i * stagger));
    }
  });
}

function applyAOSAttributes() {
  // Hero and page headings
  addAos('.hero-content', 'fade-up', 80);
  addAos('.page-hero .eyebrow, .page-hero h1, .page-hero .lede', 'fade-up', 80);

  // Sections, cards and grids
  addAos('.two-col > div', 'fade-up', 60);
  addAos('.motif-divider', 'zoom-in');
  addAos('.stats-grid > div', 'fade-up', 60);
  addAos('.card, .blog-card, .team-card, .team-member-card, .form-card', 'fade-up', 60);
  addAos('.blog-card', 'fade-up', 80);
  addAos('.blog-card-img, .blog-card-body', 'fade-up', 60);

  // Blog post media
  addAos('.blog-post-cover', 'zoom-in');
  addAos('.blog-post-gallery img', 'zoom-in', 60);

  // Gallery and team
  addAos('.gallery-grid img', 'zoom-in', 40);
  addAos('.team-grid > *', 'fade-up', 60);

  // Footer
  addAos('.footer-grid > div, .footer-bottom', 'fade-up', 60);
}

// Initialize AOS after attributes are applied (if AOS script is loaded)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof applyAOSAttributes === 'function') applyAOSAttributes();
  if (window.AOS && typeof window.AOS.init === 'function') {
    window.AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' });
  }
});
