/* ==========================================================================
   Blog posts — add one entry per update. The key becomes the URL:
   blog-post.html?post=your-key
   Cover + gallery images live in images/home/ (reuse that folder, or point
   these paths at a different folder of your choosing).
   ========================================================================== */

const BLOG_POSTS = {
  // "march-2026-senior-center-visit": {
  //   title: "An Afternoon at Sunrise Senior Living",
  //   date: "March 2026",
  //   cover: "images/home/example-cover.jpg",
  //   excerpt: "A short recap of our latest visit and the songs that brought the room to life.",
  //   body: [
  //     "Write your first paragraph here.",
  //     "Add as many paragraphs as you like — each string in this array becomes its own paragraph on the post page.",
  //   ],
  //   gallery: [
  //     "images/home/example-1.jpg",
  //     "images/home/example-2.jpg",
  //   ],
  // },
  "first-blog-post":{
    title: "Launching Our New Website!",
    date: "July 30, 2026",
    cover: "images/blog/blog1pic.png",
    excerpt: "   ",
    body: [
      "We are excited to present our NofH website! We are looking forward to beginning this journey with you as we continue our mission of spreading joy through music. This blog will be a place where we share our stories, celebrate the impact of our community, highlight upcoming events, and show how music can bring hope, comfort, and connection to people of all ages.",
      "<img src=\"images/team/ishbir_headshot.jpg\" alt=\"Ishbir Singh headshot\" class=\"blog-post-inline-image\" />",
      "<p class=\"blog-post-image-caption\">Ishbir Singh</p>",
      "A special thank you to our website designer Ishbir Singh for creating such a beautiful and welcoming space for Notes of Happiness. We truly appreciate your hard work and support in helping us share our mission.",
      "With Joy,",
      "Notes of Happiness"
    ],
    gallery: [
      "images/blog/completelogofinal.png",
    ],
  },
  
  "second-blog-post":{
    title: "Meet Our New Team!",
    date: "August 11, 2026",
    cover: "images/blog/second_blog_cover.png",
    excerpt: "   ",
    body: [
      "As our organization continues to grow, we are excited to welcome three talented individuals to our team who will help us expand our reach and create more opportunities to make a difference. Please welcome our Digital Marketing Manager <strong>Trinity Wong</strong>, Activities Manager <strong>Samreen Alam</strong>, and Recruitment Manager <strong>Neha Nair</strong>.",
      "With Joy,",
      "Notes of Happiness"
    ],
    gallery: [
      { src: "images/team/trinity_headshot.jpg", caption: "Trinity Wong" },
      { src: "images/team/samreenheadshot.jpg", caption: "Samreen Alam" },
      { src: "images/team/nehaheadshot.jpg", caption: "Neha Nair" },
    ],
  },
}; 
