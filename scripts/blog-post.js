/* ==========================================================================
   Single blog post page — reads ?post=<key> from the URL and renders it
   ========================================================================== */

function initBlogPost() {
  const mount = document.getElementById("blogPostContent");
  const empty = document.getElementById("blogPostEmpty");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const key = params.get("post");
  const post = key ? BLOG_POSTS[key] : null;

  if (!post) {
    mount.style.display = "none";
    if (empty) empty.style.display = "block";
    document.title = "Post not found | Notes of Happiness";
    return;
  }

  document.title = `${post.title} | Notes of Happiness`;

  const galleryHtml =
    post.gallery && post.gallery.length
      ? `<div class="blog-post-gallery">${post.gallery
          .map((item) => {
            const src = typeof item === "string" ? item : item.src;
            const caption = item && typeof item === "object" ? item.caption : "";
            const image = `<img src="${src}" alt="${post.title}" loading="lazy" />`;
            return caption
              ? `<div class="blog-post-gallery-item">${image}<div class="blog-post-gallery-caption">${caption}</div></div>`
              : image;
          })
          .join("")}</div>`
      : "";

  mount.innerHTML = `
    <div class="blog-post-header">
      <div class="eyebrow">${post.date}</div>
      <h1>${post.title}</h1>
    </div>
    <img class="blog-post-cover" src="${post.cover}" alt="${post.title}" />
    <div class="blog-post-body">
      ${post.body.map((p) => `<p>${p}</p>`).join("")}
    </div>
    ${galleryHtml}
    <div class="text-center mt-lg">
      <a class="btn btn-outline" href="blog.html">&larr; Back to all posts</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", initBlogPost);