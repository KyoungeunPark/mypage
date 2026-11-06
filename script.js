const $ = (id) => document.getElementById(id);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- 커버 ---------- */
$("coverSub").textContent = SITE.subtitle;
$("coverTitle").textContent = SITE.title;
$("coverName").textContent = SITE.name;
$("intro").textContent = SITE.intro;
document.title = `${SITE.title} · ${SITE.name}`;
if (SITE.coverImage) {
  $("coverPhoto").style.backgroundImage = `url("${SITE.coverImage}")`;
  $("coverPhoto").classList.add("has-img");
}

/* ---------- 오케스트라 ---------- */
const track = $("concertTrack");
track.innerHTML = CONCERTS.map((c) => `
  <article class="concert">
    <div class="poster${c.poster ? " has-img" : ""}"${c.poster ? ` style="--bg:url('${esc(c.poster)}')"` : ""}>
      ${c.poster ? `<img src="${esc(c.poster)}" alt="${esc(c.title)} 포스터" loading="lazy">` : "<span>Poster</span>"}
    </div>
    <div class="c-info">
      <p class="c-date">${esc(c.date)}</p>
      <h3 class="c-title">${esc(c.title)}</h3>
      <p class="c-meta">${esc(c.group)}${c.venue ? `<br>${esc(c.venue)}` : ""}${c.part ? `<br>${esc(c.part)}` : ""}</p>
      <ul class="c-program">${(c.program || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${c.video ? `<a class="c-video" href="${esc(c.video)}" target="_blank" rel="noopener">영상 보기 ↗</a>` : ""}
    </div>
  </article>`).join("");

// 옆으로 넘기는 캐러셀 공통 동작 (오케스트라 · 갤러리)
function setupCarousel(track, { prev, next, onChange }) {
  const items = [...track.children];
  const goTo = (i) => {
    const el = items[Math.max(0, Math.min(items.length - 1, i))];
    if (el) track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  };
  const current = () => {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    items.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - mid);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  };
  let last = -1;
  const sync = () => { const i = current(); if (i !== last) { last = i; onChange(i); } };
  prev.addEventListener("click", () => goTo(current() - 1));
  next.addEventListener("click", () => goTo(current() + 1));
  track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  sync();
  return goTo;
}

const pager = $("pager");
pager.innerHTML = CONCERTS.map((_, i) => `<button aria-label="${i + 1}번째 공연"></button>`).join("");
const dots = [...pager.children];
const goConcert = setupCarousel(track, {
  prev: $("prevBtn"), next: $("nextBtn"),
  onChange: (i) => dots.forEach((d, j) => d.classList.toggle("on", i === j)),
});
dots.forEach((d, i) => d.addEventListener("click", () => goConcert(i)));

/* ---------- 바이올린 ---------- */
if (VIOLIN.now && VIOLIN.now.piece) {
  $("nowPiece").textContent = VIOLIN.now.piece;
  $("nowComposer").textContent = VIOLIN.now.composer;
  $("nowNote").textContent = VIOLIN.now.note || "";
} else {
  $("nowCard").remove();
}
$("studiedList").innerHTML = VIOLIN.studied.map((p) => `
  <li${p.favorite ? ' class="fav"' : ""}><div><span class="p-piece">${esc(p.piece)}${p.favorite ? ' <span class="fav-mark" aria-label="좋아하는 곡">♡</span>' : ""}</span><span class="p-composer">${esc(p.composer)}</span></div></li>`).join("");
const renderWish = (list) => list.map((p) => `
  <li>${esc(p.piece)} <small>· ${esc(p.composer)}</small></li>`).join("");
$("wishList").innerHTML = renderWish(VIOLIN.wishlist);
$("orchWishList").innerHTML = renderWish(ORCHESTRA_WISHLIST);

/* ---------- 춤 ---------- */
$("danceFlow").innerHTML = DANCE.map((d, i) => {
  const isNow = i === DANCE.length - 1;
  return `${i ? '<div class="step-arrow reveal"></div>' : ""}
    <div class="step reveal${isNow ? " now" : ""}">
      <p class="step-en">${esc(d.genre)}</p>
      <p class="step-ko">${esc(d.ko)}</p>
      ${isNow ? '<span class="step-badge">now dancing</span>' : ""}
    </div>`;
}).join("");

/* ---------- 연구 ---------- */
const paperList = (papers = []) => papers.length ? `
  <ul class="t-papers">${papers.map((p) => {
    const body = `<span class="tp-title">${esc(p.title)}</span>
      <span class="tp-meta">${esc(p.authors).replaceAll(esc(SITE.name), `<b>${esc(SITE.name)}</b>`)} ·<i>${esc(p.venue)}</i>${p.year ? `, ${esc(p.year)}` : ""}</span>`;
    return `<li>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${body}<span class="tp-go">↗</span></a>` : `<div>${body}</div>`}</li>`;
  }).join("")}</ul>` : "";

$("timeline").innerHTML = JOURNEY.map((j, i) => `
  <li class="t-item reveal${i === JOURNEY.length - 1 ? " now" : ""}">
    <p class="t-period">${esc(j.period)}<span class="t-role">${esc(j.role)}</span></p>
    <p class="t-title">${esc(j.title)}</p>
    <p class="t-desc">${esc(j.desc)}</p>
    ${paperList(j.papers)}
  </li>`).join("");

/* ---------- 갤러리 ---------- */
const gTrack = $("galleryTrack");
gTrack.innerHTML = GALLERY.map((g, i) => `
  <figure class="g-slide${g.src ? " has-img" : ""}"${g.src ? ` style="background-image:url('${esc(g.src)}')"` : ""}>
    ${g.tag ? `<span class="g-tag">${esc(g.tag)}</span>` : ""}
    <span class="g-ph">Photo ${i + 1}</span>
  </figure>`).join("");
const thumbs = $("galleryThumbs");
thumbs.innerHTML = GALLERY.map((g, i) => `
  <button class="thumb${g.src ? " has-img" : ""}"${g.src ? ` style="background-image:url('${esc(g.src)}')"` : ""} aria-label="${i + 1}번째 사진"></button>`).join("");
const thumbBtns = [...thumbs.children];
const goPhoto = setupCarousel(gTrack, {
  prev: $("gPrev"), next: $("gNext"),
  onChange: (i) => {
    $("galleryCount").textContent = `${i + 1} / ${GALLERY.length}`;
    thumbBtns.forEach((t, j) => t.classList.toggle("on", i === j));
  },
});
thumbBtns.forEach((t, i) => t.addEventListener("click", () => goPhoto(i)));

/* ---------- 연락처 ---------- */
const ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/>',
  scholar: '<path d="M2.5 9.5 12 4l9.5 5.5L12 15z"/><path d="M6.5 12.2V16c1.5 1.5 3.5 2.3 5.5 2.3s4-.8 5.5-2.3v-3.8"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="7.6" r="1" fill="currentColor" stroke="none"/><path d="M8 10.5v6M12 16.5v-6M12 13.2a2.5 2.5 0 0 1 5 0v3.3"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.2 5 2.8-5 2.8z"/>',
};
const c = SITE.contact;
const contactItems = [
  ["instagram", "Instagram", c.instagram, true],
  ["scholar", "Google Scholar", c.scholar, true],
  ["linkedin", "LinkedIn", c.linkedin, true],
  ["email", "Email", c.email && `mailto:${c.email}`, false],
  ["youtube", "YouTube", c.youtube, false],
];
$("contacts").innerHTML = contactItems
  .filter(([, , href, always]) => href || always)
  .map(([key, label, href]) => {
    const svg = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[key]}</svg>`;
    return href
      ? `<a class="icon-link" href="${esc(href)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${svg}</a>`
      : `<span class="icon-link empty" aria-label="${label}" title="${label} (링크 준비 중)">${svg}</span>`;
  }).join("");
$("copyright").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

/* ---------- 스크롤 등장 ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- 섹션 점 내비 ---------- */
const navDots = [...document.querySelectorAll(".dots a")];
const sections = navDots.map((a) => document.querySelector(a.getAttribute("href")));
const navIo = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const i = sections.indexOf(e.target);
      navDots.forEach((d, j) => d.classList.toggle("on", i === j));
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sections.forEach((s) => s && navIo.observe(s));
