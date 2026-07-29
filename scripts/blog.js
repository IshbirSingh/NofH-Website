/* ==========================================================================
   Blog listing page — renders cards from BLOG_POSTS
   ========================================================================== */

function initBlogList() {
  const grid = document.getElementById("blogGrid");
  const empty = document.getElementById("blogEmpty");
  if (!grid) return;

  const keys = Object.keys(BLOG_POSTS).reverse(); // newest entry added = shown first

  if (keys.length === 0) {
    grid.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }

  grid.innerHTML = keys
    .map((key) => {
      const post = BLOG_POSTS[key];
      return `
        <a class="blog-card" href="blog-post.html?post=${encodeURIComponent(key)}">
          <img class="blog-card-img" src="${post.cover}" alt="${post.title}" loading="lazy" />
          <div class="blog-card-body">
            <div class="blog-card-date">${post.date}</div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
        </a>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", initBlogList);
