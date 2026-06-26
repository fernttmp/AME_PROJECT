const menuBtn = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-menu");

if(menuBtn && navMenu){

  menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

  });

}

/* =========================================================
   AME INTEGRATED MOTION PACK
   เพิ่มลูกเล่นโดยไม่แตะระบบเดิม
   - ใช้กับไฟล์เดิม navbar.js เพราะทุกหน้ามีไฟล์นี้อยู่แล้ว
   - ถ้ามีปัญหา ลบเฉพาะส่วนนี้ออกได้
========================================================= */
(function(){
  document.addEventListener("DOMContentLoaded", function(){
    createProgressBar();
    setupNavbarMotion();
    setupRevealMotion();
    setupCounters();
    setupRippleButtons();
    setupCursorGlow();
    setupHeroParallax();
  });

  function createProgressBar(){
    if (document.querySelector(".ame-progress-bar")) return;

    const bar = document.createElement("div");
    bar.className = "ame-progress-bar";
    document.body.appendChild(bar);

    const update = function(){
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, percent)) + "%";
    };

    window.addEventListener("scroll", update, { passive:true });
    window.addEventListener("resize", update);
    update();
  }

  function setupNavbarMotion(){
    const header = document.querySelector(".header");
    if (!header) return;

    const update = function(){
      header.classList.toggle("scrolled", window.scrollY > 30);
    };

    window.addEventListener("scroll", update, { passive:true });
    update();
  }

  function setupRevealMotion(){
    const revealSelectors = [
      ".section-title",
      ".activity-head",
      ".service-group > .service-kicker",
      ".service-group > h2",
      ".career-heading",
      ".track-title",
      ".ame-intro-card",
      ".program-card",
      ".highlight-card",
      ".highlight-item",
      ".video-card",
      ".why-card",
      ".career-item",
      ".track-panel",
      ".program-intro-card",
      ".program-stat-card",
      ".program-category-card",
      ".elective-chip",
      ".plo-card",
      ".year-block",
      ".semester-card",
      ".person-card",
      ".service-card",
      ".activity-card",
      ".alumni-stat",
      ".alumni-filter",
      ".alumni-card",
      ".career-match-panel",
      ".result-preview",
      ".admission-card"
    ];

    const staggerParents = [
      ".highlight",
      ".highlight-grid",
      ".video-grid",
      ".why-grid",
      ".career-slider",
      ".track-showcase",
      ".program-grid",
      ".program-top-grid",
      ".program-category-grid",
      ".elective-grid",
      ".plo-grid",
      ".semester-grid",
      ".personnel-grid",
      ".service-grid",
      ".activity-list",
      ".alumni-stats",
      ".alumni-grid"
    ];

    document.querySelectorAll(staggerParents.join(",")).forEach(function(parent){
      parent.classList.add("ame-stagger");
    });

    const items = Array.from(document.querySelectorAll(revealSelectors.join(",")));
    items.forEach(function(item){ item.classList.add("ame-reveal"); });

    if (!("IntersectionObserver" in window)) {
      items.forEach(function(item){ item.classList.add("ame-show"); });
      return;
    }

    const observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        entry.target.classList.add("ame-show");
        observer.unobserve(entry.target);
      });
    }, {
      threshold:0.12,
      rootMargin:"0px 0px -70px 0px"
    });

    items.forEach(function(item){ observer.observe(item); });
  }

  function setupCounters(){
    const counterSelectors = [
      ".program-stat-card h3",
      ".alumni-stat strong",
      ".result-score strong"
    ];

    const counters = Array.from(document.querySelectorAll(counterSelectors.join(",")))
      .filter(function(el){ return /\d/.test(el.textContent); });

    if (counters.length === 0) return;

    counters.forEach(function(el){
      const original = el.textContent.trim();
      const number = parseInt(original.replace(/[^0-9]/g, ""), 10);
      if (Number.isNaN(number)) return;

      el.dataset.ameOriginal = original;
      el.dataset.ameTarget = String(number);
      el.dataset.ameSuffix = original.replace(/[0-9]/g, "");
    });

    const animateCounter = function(el){
      if (el.dataset.ameCounted === "true") return;
      el.dataset.ameCounted = "true";

      const target = Number(el.dataset.ameTarget || 0);
      const suffix = el.dataset.ameSuffix || "";
      const duration = 1200;
      const startTime = performance.now();

      const tick = function(now){
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value + suffix;

        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };

      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold:.45 });

    counters.forEach(function(el){ observer.observe(el); });
  }

  function setupRippleButtons(){
    const buttons = document.querySelectorAll(
      ".primary-btn, .secondary-btn, .nav-btn, .ai-btn-primary, .person-info button, .map-btn, .alumni-filter button, .career-nav"
    );

    buttons.forEach(function(button){
      button.addEventListener("click", function(event){
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement("span");

        ripple.className = "ame-ripple";
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.left = (event.clientX - rect.left - size / 2) + "px";
        ripple.style.top = (event.clientY - rect.top - size / 2) + "px";

        button.appendChild(ripple);
        setTimeout(function(){ ripple.remove(); }, 650);
      });
    });
  }

  function setupCursorGlow(){
    const cards = document.querySelectorAll(
      ".program-card, .program-stat-card, .program-category-card, .plo-card, .person-card, .service-card, .activity-card, .alumni-card, .career-item, .video-card, .why-card, .semester-card"
    );

    cards.forEach(function(card){
      card.classList.add("ame-glow-card");

      card.addEventListener("mousemove", function(event){
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--x", x + "%");
        card.style.setProperty("--y", y + "%");
      });
    });
  }

  function setupHeroParallax(){
    const heroes = document.querySelectorAll(".hero, .page-hero, .alumni-hero, .ai-admission-hero, .project-hero");
    if (heroes.length === 0) return;

    heroes.forEach(function(hero){
      hero.addEventListener("mousemove", function(event){
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        const offsetX = Math.round(50 + x * 3);
        const offsetY = Math.round(50 + y * 3);
        hero.style.backgroundPosition = offsetX + "% " + offsetY + "%";
      });

      hero.addEventListener("mouseleave", function(){
        hero.style.backgroundPosition = "center right";
      });
    });
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const searchBox = document.querySelector(".site-search");
  const menuButton = document.getElementById("menuToggle");

  if (!navbar || !searchBox || !menuButton) return;

  if (navbar.querySelector(".mobile-search-toggle")) return;

  const searchButton = document.createElement("button");

  searchButton.type = "button";
  searchButton.className = "mobile-search-toggle";
  searchButton.setAttribute("aria-label", "Open search");

  searchButton.innerHTML =
    '<i class="fa-solid fa-magnifying-glass"></i>';

  menuButton.insertAdjacentElement("beforebegin", searchButton);

  searchButton.addEventListener("click", (event) => {
    event.stopPropagation();

    searchBox.classList.toggle("mobile-open");

    const input = searchBox.querySelector("input");

    if (searchBox.classList.contains("mobile-open") && input) {
      input.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedSearch = event.target.closest(".site-search");
    const clickedSearchButton = event.target.closest(
      ".mobile-search-toggle"
    );

    if (!clickedSearch && !clickedSearchButton) {
      searchBox.classList.remove("mobile-open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      searchBox.classList.remove("mobile-open");
    }
  });
});