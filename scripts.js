
/* ============================================================
   1) EDIT YOUR CONTENT HERE — nothing below section 2 needs changes
   ============================================================ */

const PROFILE = {
  name: "Srini Kumar V",
  about: "Passionate about developing efficient and scalable software solutions for real-world problems.I love turning ideas into pragmatic applications.",
  photo: "files/images/personal/myphoto.png"   // put your photo next to this file; leave as-is until then
};

const ABOUT = {
  role: "Pursuing Software Engineer",
  photo: "files/images/personal/myphoto.png", // set "" to hide, or use a different image path
  bio: [
    "Passionate about developing reliable and secure software solutions for real-world problems, I love turning ideas into pragmatic applications. I am a responsible, adaptable, and ambitious person, ready to apply my knowledge to real-world problems and provide greater value to a firm.",
    "I love computers at both the hardware and software levels. Computer technology always surprises me with new ideas, thoughts, and problems. Because of this, I chose computer science in my 12th grade. but, for my bachelor's degree, I didn't have the option to choose computer science. Despite this, my interest in computer science and software engineering has not faded. I continuously learn new software technologies, tools, and frameworks. Especially in the age of AI, with daily updates to new tools, it has become very easy to build software in days that would previously take weeks to develop." ,
    "I am well-versed in AI prompting and AI software development, and I can build complex systems in just a few prompts. I am always ready to adapt to new environments and learn new skills and technologies to equip myself and expand my knowledge.",
    "Currently, I am in my final year studying B.E. Electrical and Electronics Engineering at JCT College, Coimbatore. I am now actively looking for internships and job offers in software engineering."
  ],
  stats: [
    { value: "C/C++",        label: "C/C++ Programming" },
    { value: "Python",       label: "Python Programming" },
    { value: "Git & GitHub",   label: "Version Control Systems" },
    { value: "AI Prompting", label: "Prompting Engineering" }
  ]
};

const EDUCATION = [
  {
    date: "2020 – 2021",
    title: "High Schooling (10ᵗʰ)",
    institution: "MBHSS",
    summary: "Completed my high school(10ᵗʰ) at Municipal Boys Higher Secondary School, Pollachi. With a focus on Science and Mathematics.",
    details: "Tamil Nadu State Board, Percentage:100%(Corona Batch), I enjoyed learning at school."
  },
  {
    date: "2021 – 2023",
    title: "Higher Secondary (12ᵗʰ)",
    institution: "MBHSS",
    summary: "Completed higher secondary(12ᵗʰ) education at Municipal Boys Higher Secondary School, Pollachi. with a focus on Computer Science (PCM).",
    details: "Tamil Nadu State Board, stream: Computer Science, percentage: 80% in Computer Science, partisipated in devisonal level Basketball sports meets,I were part of School Innovation Development Project club."
  },
  {
    date: "2023 – 2027",
    title: "B.E Electrical and Electronics Engineering",
    institution: "Anna University, Chennai",
    summary: "Pursuing B.E in Electrical and Electronics Engineering at JCT College of Engineering and Technology, Anna University, Coimbatore. with a focus on Software Development and AI.",
    details: "CGPA: 7.72, I am a part of Youth Red Cross, interests: Software Development, Artificial Intelligence."
  }
];

// icon: path to your own image (e.g. "icons/html.png"). Leave "" to use the emoji fallback.
const SKILLS = [
  { name: "Communication",icon: "", fallback: '<i class="fa-solid  fa-face-smile" style="color:#E9B411"></i>',   desc: "I can effectively communicate ideas and collaborate with others." },
  { name: "Python",       icon: "files/images/icons/py.svg", fallback: '<i class="fa-brands fa-python" style="color:#3776AB"></i>',   desc: "I can easily write Python code for various programming tasks." },
  { name: "C/C++",       icon: "", fallback: '<i class="fa-solid fa-c" style="color:#3776AB"></i>',   desc: "I can write clean and efficient code for various use cases." },
  { name: "Git & GitHub", icon: "", fallback: '<i class="fa-brands fa-github" style="color:#1B1F23"></i>',   desc: "I can use Git and GitHub for version control and collaboration." },
  { name: "Linux", icon: "files/images/icons/Tux.svg", fallback: '<i class="fa-brands fa-linux" style="color:#000000"></i>',   desc: "I can navigate and use Linux command-line interface effectively." },
  { name: "AI Prompting", icon: "", fallback: '<i class="fa-solid fa-wand-magic-sparkles" style="color:var(--yellow"></i>',   desc: "I can write effective prompts for desired output for all high level AI models." },
  { name: "HTML",         icon: "", fallback: '<i class="fa-brands fa-html5" style="color:#E44D26"></i>',   desc: "I can structure the web with semantic and accessible markup." },
  { name: "CSS",          icon: "", fallback: '<i class="fa-brands fa-css3-alt" style="color:#2965F1"></i>', desc: "I use CSS for styling and designing responsive, modern user interfaces." },
  { name: "JavaScript",   icon: "", fallback: '<i class="fa-brands fa-js" style="color:#E9B411"></i>',       desc: "I can add interactivity and dynamic behavior to web applications." },
  { name: "MS Word", icon: "files/images/icons/mswd.svg", fallback: '<i class="fa-brands fa-microsoft" style="color:#3299e7"></i>',   desc: "I am an advanced MS Office user, easily create and edit word documents." },
  { name: "MS Excel", icon: "files/images/icons/msxl.svg", fallback: '<i class="fa-brands fa-microsoft" style="color:#3299e7"></i>',   desc: "I can use MS Excel for efficient data analysis and reporting." },
  { name: "MS PowerPoint", icon: "files/images/icons/msppt.svg", fallback: '<i class="fa-brands fa-microsoft" style="color:#3299e7"></i>',   desc: "I can create engaging presentations using MS PowerPoint." },
  { name: "Networking Fundamentals", icon: "", fallback: '<i class="fa-solid fa-network-wired" style="color:#1B1F23"></i>',   desc: "I can understand and apply networking concepts and principles." },


  
];

// image: path to a screenshot (e.g. "images/task-manager.png"). Leave "" for a placeholder.
const PROJECTS = [
  { id:"p1", name:"JCT EEE CGPA Calculator(R21)",   image:"files/images/projects/jctcgpacalculator.png", desc:"A simple web application for calculating GPA and CGPA for JCT college EEE students.", tags:["HTML","CSS","JavaScript"], link:"https://srini-kumar.github.io/CGPA-Calculator-/" },
  { id:"p2", name:"MyDictionary",        image:"files/images/projects/mydictionary.png", desc:"A dictionary website that provides word definitions and translations using a public API and gemini integration for simple definitions.",   tags:["HTML","CSS","JavaScript","API"], link:"https://srini-kumar.github.io/MyDictionary/" },
  { id:"p3", name:"Personal Portfolio", image:"files/images/projects/portfoliosite.png", desc:"A personal portfolio website to showcase my skills, projects, and professional journey.", tags:["HTML","CSS","JavaScript"], link:"#" },
  { id:"p4", name:"Solar Powered Portable Water Purifier", image:"", desc:"This my final year project, currently in development.", tags:["PowerElectronics","Solar",], link:"#" },

];

const CERTIFICATIONS = [
  { 
    id: "c1",
    name: "Fundamental Algorithms:Design and Analysis", 
    org: "NPTEL", 
    date: "March 2026", 
    image: "files/images/certificates/dsa.jpg",
  },
  { 
    id: "c2",
    name: "Gen AI for Software Development", 
    org: "IBM", 
    date: "August 2025", 
    image: "files/images/certificates/genai.jpeg",
  }
];

const CONTACTS = [
  { label:"Email",    image:"files/images/icons/gmail.svg", icon:"fa-brands fa-google",    color:"#0F6B5C", bg:"#DFF0E8",  value:"srinikumar.v1705@gmail.com",    href:"https://mail.google.com/mail/?view=cm&fs=1&to=srinikumar.v1705@gmail.com" },
  { label:"LinkedIn", image:"", icon:"fa-brands fa-linkedin",  color:"#0A66C2", bg:"#E3EEFA", value:"linkedin.com/in/srini-kumar-7012352a2",  href:"https://linkedin.com/in/srini-kumar-7012352a2" },
  { label:"GitHub",   image:"", icon:"fa-brands fa-github",    color:"#1B1F23", bg:"#EDEFF1", value:"github.com/Srini-Kumar",       href:"https://github.com/Srini-Kumar" },
  { label:"Slack",    image:"files/images/icons/slack.svg", icon:"fa-brands fa-slack",     color:"#E0A22B", bg:"#FBF0D8", value:"srini-rvw2744.slack.com",        href:"https://srini-rvw2744.slack.com" }
];

/* ============================================================
   2) RENDERING + INTERACTIONS — you normally don't edit below
   ============================================================ */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- profile ---- */
$("#pName").textContent = PROFILE.name;
$("#pAbout").textContent = PROFILE.about;
$("#year").textContent = new Date().getFullYear();
$("#aboutName").textContent = PROFILE.name;
(function loadPhoto(){
  if(!PROFILE.photo) return;
  const img = new Image();
  img.onload = () => { $("#avatar").innerHTML = ""; img.alt = PROFILE.name; $("#avatar").appendChild(img); };
  img.src = PROFILE.photo;                       // silently keeps the icon if missing
})();

/* ---- about ---- */
$("#aboutRole").textContent = ABOUT.role;
$("#aboutBio").innerHTML = ABOUT.bio.map(p => `<p>${p}</p>`).join("");
$("#aboutStats").innerHTML = ABOUT.stats.map(s => `
  <div class="stat">
    <b>${s.value}</b>
    <span>${s.label}</span>
  </div>`).join("");
(function loadAboutPhoto(){
  if(!ABOUT.photo) return;
  const img = new Image();
  img.onload = () => { $("#aboutAvatar").innerHTML = ""; img.alt = PROFILE.name; $("#aboutAvatar").appendChild(img); };
  img.src = ABOUT.photo;                         // silently keeps the icon if missing
})();

/* ---- nav ball ---- */
const nav = $("#nav");
$("#navBall").addEventListener("click", e => {
  e.stopPropagation();
  const open = nav.classList.toggle("open");
  $("#navBall").setAttribute("aria-expanded", open);
});
document.addEventListener("click", e => { if(!nav.contains(e.target)) nav.classList.remove("open"); });
document.addEventListener("keydown", e => { if(e.key === "Escape"){ nav.classList.remove("open"); closeModal(); } });
$$("#navPanel a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

/* ---- education timeline ---- */
const timeline = $("#timeline");
EDUCATION.forEach((ed, i) => {
  const cardFirst = i % 2 === 1;                 // row 2 has the card on the left
  const row = document.createElement("div");
  row.className = "tl-row " + (cardFirst ? "right" : "left");
  const card = `
    <button class="edu-card" data-i="${i}">
      <span class="edu-ico"><i class="fa-solid fa-graduation-cap"></i></span>
      <span>
        <h3>${ed.title}</h3>
        <p class="inst">${ed.institution}</p>
        <p>${ed.summary}</p>
      </span>
      <span class="edu-chev"><i class="fa-solid fa-chevron-right"></i></span>
    </button>`;
  const date = `<div class="tl-date">${cardFirst ? "" : "<span></span>"}${
      cardFirst ? `<span class="tl-dash"></span><span>${ed.date}</span>`
                : `<span>${ed.date}</span><span class="tl-dash"></span>`}</div>`;
  row.innerHTML = (cardFirst ? card : date) +
                  `<div class="tl-node" data-node></div>` +
                  (cardFirst ? date : card);
  timeline.appendChild(row);
});

/* modal */
const modal = $("#eduModal");
function openModal(i){
  const ed = EDUCATION[i];
  $("#mTitle").textContent = ed.title;
  $("#mInst").textContent  = `${ed.institution} · ${ed.date}`;
  $("#mBody").textContent  = ed.details;
  modal.classList.add("open");
}
function closeModal(){ modal.classList.remove("open"); }
$$(".edu-card").forEach(b => b.addEventListener("click", () => openModal(+b.dataset.i)));
$$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));

/* line fill + node states — plays when the Education section is opened */
const fill = $("#tlFill");
let tlTimers = [];
function animateTimeline(){
  const nodes = $$("[data-node]", timeline);
  tlTimers.forEach(clearTimeout); tlTimers = [];
  if(reduceMotion){
    fill.style.transition = "none"; fill.style.height = "100%";
    nodes.forEach(n => n.classList.add("filled"));
    return;
  }
  fill.style.transition = "none";
  fill.style.height = "0%";
  nodes.forEach(n => n.classList.remove("filled","pulse"));
  void fill.offsetWidth;
  tlTimers.push(setTimeout(() => {
    fill.style.transition = "height 1.6s cubic-bezier(.4,0,.2,1)";
    fill.style.height = "100%";
  }, 260));
  nodes.forEach((n, i) => {
    tlTimers.push(setTimeout(() => {
      n.classList.add("filled");
      nodes.forEach(x => x.classList.remove("pulse"));
      n.classList.add("pulse");
    }, 420 + i * 480));
  });
}


/* ---- skills ---- */
$("#skillList").innerHTML = SKILLS.map(s => `
  <div class="skill">
    <div class="skill-ico" data-fallback="${encodeURIComponent(s.fallback || '<i class=\"fa-solid fa-star\"></i>')}">${s.icon ? `<img src="${s.icon}" alt="${s.name}">` : (s.fallback || '<i class="fa-solid fa-star"></i>')}</div>
    <h3>${s.name}</h3>
    <p>${s.desc || ""}</p>
  </div>`).join("");

// if a custom skill icon path is wrong, fall back to the built-in icon
$$(".skill-ico img").forEach(img => img.addEventListener("error", () => {
  img.parentElement.innerHTML = decodeURIComponent(img.parentElement.dataset.fallback);
}));

/* ---- projects (likes + comments stored locally) ---- */
const STORE_KEY = "portfolio.projects.social.v1";
const store = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(store));
const state = id => (store[id] = store[id] || { liked:false, likes:0, comments:[] });

$("#projectList").innerHTML = PROJECTS.map(p => {
  const st = state(p.id);
  return `
  <article class="post" data-id="${p.id}">
    <div class="post-head">
      <h3>${p.name}</h3>
      <small>Project</small>
    </div>
    <div class="post-img">${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<i class="fa-regular fa-image"></i>`}</div>
    <div class="post-body">
      <p>${p.desc}</p>
      <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <a class="post-link" href="${p.link}" target="_blank" rel="noopener">View Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    <div class="post-foot">
      <button class="act like ${st.liked?"liked":""}"><i class="fa-regular fa-thumbs-up"></i> <span class="n">${st.likes}</span> Like</button>
      <button class="act toggle-c"><i class="fa-regular fa-comment"></i> <span class="cn">${st.comments.length}</span> Comment</button>
    </div>
    <div class="comments">
      <ul></ul>
      <form class="cform"><input type="text" placeholder="Write a comment…" maxlength="240" /><button type="submit"><i class="fa-solid fa-paper-plane"></i></button></form>
    </div>
  </article>`;
}).join("");
save();

$$(".post").forEach(post => {
  const id = post.dataset.id, st = state(id);
  const list = $("ul", post);
  const paint = () => {
    list.innerHTML = st.comments.map(c => `<li><b>${c.at}</b>${c.text}</li>`).join("");
    $(".cn", post).textContent = st.comments.length;
    $(".n", post).textContent  = st.likes;
  };
  paint();
  $(".like", post).addEventListener("click", e => {
    st.liked = !st.liked; st.likes += st.liked ? 1 : -1;
    if(st.likes < 0) st.likes = 0;
    e.currentTarget.classList.toggle("liked", st.liked);
    $("i", e.currentTarget).className = st.liked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up";
    save(); paint();
  });
  $(".toggle-c", post).addEventListener("click", () => $(".comments", post).classList.toggle("show"));
  $(".cform", post).addEventListener("submit", e => {
    e.preventDefault();
    const input = $("input", e.currentTarget);
    const text = input.value.trim(); if(!text) return;
    st.comments.push({ text, at: new Date().toLocaleDateString() });
    input.value = ""; save(); paint();
  });
});
/* ---- certifications ---- */

/* ---- certifications (likes + comments stored locally) ---- */
const CERT_STORE_KEY = "portfolio.certs.social.v1";
const certStore = JSON.parse(localStorage.getItem(CERT_STORE_KEY) || "{}");
const saveCerts = () => localStorage.setItem(CERT_STORE_KEY, JSON.stringify(certStore));
const certState = id => (certStore[id] = certStore[id] || { liked:false, likes:0, comments:[] });

  $("#certList").innerHTML = CERTIFICATIONS.map(c => {
  const st = certState(c.id);
  return `
  <article class="post" data-id="${c.id}">
    <div class="post-img">${c.image ? `<img src="${c.image}" alt="${c.name}">` : `<i class="fa-regular fa-image"></i>`}</div>
    <div class="post-foot" style="flex-direction:column; align-items:stretch; gap:10px; padding-top:12px;">
      <div style="padding: 0 6px;">
        <h3 style="margin:0; font-size:18px;">${c.name}</h3>
        <small style="color:var(--ink-soft); display:block; margin-top:2px;">${c.org} ·<span align-text:"left" class="tag">${c.date}</span>
        </div></small> 
      <div style="display:flex; gap:8px;">
        <button class="act like ${st.liked?"liked":""}"><i class="fa-regular fa-thumbs-up"></i> <span class="n">${st.likes}</span> Like</button>
        <button class="act toggle-c"><i class="fa-regular fa-comment"></i> <span class="cn">${st.comments.length}</span> Comment</button>
      </div>
    </div>
    <div class="comments">
      <ul></ul>
      <form class="cform"><input type="text" placeholder="Write a comment…" maxlength="240" /><button type="submit"><i class="fa-solid fa-paper-plane"></i></button></form>
    </div>
  </article>`;
}).join("");
saveCerts();

// We target specifically #certList .post so it doesn't double-trigger on projects
 $$("#certList .post").forEach(post => {
  const id = post.dataset.id, st = certState(id);
  const list = $("ul", post);
  const paint = () => {
    list.innerHTML = st.comments.map(c => `<li><b>${c.at}</b>${c.text}</li>`).join("");
    $(".cn", post).textContent = st.comments.length;
    $(".n", post).textContent  = st.likes;
  };
  paint();
  $(".like", post).addEventListener("click", e => {
    st.liked = !st.liked; st.likes += st.liked ? 1 : -1;
    if(st.likes < 0) st.likes = 0;
    e.currentTarget.classList.toggle("liked", st.liked);
    $("i", e.currentTarget).className = st.liked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up";
    saveCerts(); paint();
  });
  $(".toggle-c", post).addEventListener("click", () => $(".comments", post).classList.toggle("show"));
  $(".cform", post).addEventListener("submit", e => {
    e.preventDefault();
    const input = $("input", e.currentTarget);
    const text = input.value.trim(); if(!text) return;
    st.comments.push({ text, at: new Date().toLocaleDateString() });
    input.value = ""; saveCerts(); paint();
  });
});



/* ---- contact ---- */
 
/* ---- contact ---- */
 $("#contactList").innerHTML = CONTACTS.map(c => `
  <div class="crow">
    <div class="clabel">
      <span class="ci" style="background:${c.bg};color:${c.color}" data-fallback="${encodeURIComponent(`<i class="${c.icon}"></i>`)}">
        ${c.image ? `<img src="${c.image}" style="width:24px;height:24px;object-fit:contain;" alt="${c.label}">` : `<i class="${c.icon}"></i>`}
      </span>
      <b style="color:${c.color}">${c.label}</b>
    </div>
    <div class="carrow" style="color:${c.color}"><i class="fa-solid fa-arrow-right"></i></div>
    <div class="clink">
      <a href="${c.href}" target="_blank" rel="noopener">${c.value}</a>
      <button class="copy" type="button" data-copy="${c.value}" aria-label="Copy ${c.label}">
        <i class="fa-regular fa-copy"></i>
        <span class="copied-bubble">Copied!</span>
      </button>
    </div>
  </div>`).join("");

// Fallback to icon if contact image fails to load
 $$(".ci img").forEach(img => img.addEventListener("error", () => {
  img.parentElement.innerHTML = decodeURIComponent(img.parentElement.dataset.fallback);
}));

let copyTimers = {};
 $$(".copy").forEach(btn => btn.addEventListener("click", async e => {
  e.preventDefault(); 
  e.stopPropagation();
  
  const text = btn.dataset.copy;
  
  // 1. Safely attempt to copy text (won't crash script if browser blocks it)
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  } catch (err) {
    console.error("Clipboard blocked by browser:", err);
  }
  
  // 2. Change icon to checkmark
  const ico = btn.querySelector("i");
  const bubble = btn.querySelector(".copied-bubble");
  
  if(ico) ico.className = "fa-solid fa-check";
  
  // 3. Force the bubble to show via inline styles
  if(bubble) {
    bubble.style.opacity = "1";
    bubble.style.transform = "translateX(-50%) translateY(0)";
  }
  
  // 4. Clear any existing timers to prevent early hiding
  if (btn.copyTimer) clearTimeout(btn.copyTimer);
  
  // 5. Reset everything after 1.5 seconds
  btn.copyTimer = setTimeout(() => {
    if(ico) ico.className = "fa-regular fa-copy";
    if(bubble) {
      bubble.style.opacity = "0";
      bubble.style.transform = "translateX(-50%) translateY(5px)";
    }
  }, 1500);
}));

/* ---- section router: only the selected section is shown ---- */
const links    = $$("#navPanel a");
const sections = $$("main > section");
const sweep    = document.createElement("div");
sweep.className = "sweep"; document.body.appendChild(sweep);

let currentId = null, switching = false;

function setNavActive(id){
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
}

function showSection(id, { animate = true } = {}){
  const next = document.getElementById(id);
  if(!next || id === currentId || switching) return;
  const prev = currentId ? document.getElementById(currentId) : null;
  currentId = id;
  setNavActive(id);

  const reveal = () => {
    sections.forEach(s => s.classList.remove("is-active","is-leaving"));
    next.classList.add("is-active");
    window.scrollTo({ top:0, behavior:"auto" });
    // replay the child stagger animations
    $$(".reveal", next).forEach(el => { el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; });
    if(id === "education") animateTimeline();
    switching = false;
  };

  if(!animate || reduceMotion || !prev){ reveal(); return; }

  switching = true;
  sweep.classList.remove("run"); void sweep.offsetWidth; sweep.classList.add("run");
  prev.classList.remove("is-active");
  prev.classList.add("is-leaving");
  setTimeout(reveal, 300);
}

/* nav clicks + hash support (works with browser back/forward) */
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href").slice(1);
  if(!document.getElementById(id)) return;
  e.preventDefault();
  if(location.hash !== "#" + id) history.pushState(null, "", "#" + id);
  showSection(id);
}));
window.addEventListener("popstate", () => {
  const id = location.hash.slice(1);
  if(id && document.getElementById(id)) showSection(id);
});

/* back-to-top only matters inside a long section */
function onScroll(){ $("#toTop").classList.toggle("show", window.scrollY > 500); }
window.addEventListener("scroll", onScroll, { passive:true });
$("#toTop").addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

/* first paint */
const startId = location.hash.slice(1);
showSection(document.getElementById(startId) ? startId : "home", { animate:false });
onScroll();


/* ---- mouse parallax (desktop only, subtle) ---- */
const canParallax = window.matchMedia("(min-width: 901px)").matches && !reduceMotion;
if(canParallax){
  const text = $("#homeText"), photo = $("#homePhoto"), tl = $("#timeline");
  let tx=0, ty=0, cx=0, cy=0;
  window.addEventListener("mousemove", e => {
    tx = (e.clientX / window.innerWidth  - .5) * 2;   // -1 .. 1
    ty = (e.clientY / window.innerHeight - .5) * 2;
  });
  (function loop(){
    cx += (tx - cx) * .06; cy += (ty - cy) * .06;
    text.style.transform  = `translate3d(${-cx*14}px, ${-cy*10}px, 0)`;
    photo.style.transform = `translate3d(${cx*18}px, ${cy*12}px, 0) scale(${1 + Math.abs(cx)*.012})`;
    tl.style.transform    = `translate3d(${cx*8}px, ${cy*5}px, 0)`;
    requestAnimationFrame(loop);
  })();
}
