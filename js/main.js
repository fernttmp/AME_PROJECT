document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("careerSlider");

  if (!slider) return;

  const wrapper = slider.closest(".career-slider-wrapper");
  const items = Array.from(slider.querySelectorAll(".career-item"));

  if (!wrapper || items.length === 0) return;

  let currentPage = 0;
  let autoSlide = null;
  let dots = null;
  let scrollTimer = null;

  function getItemsPerPage() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 4;
  }

  function getTotalPages() {
    return Math.ceil(items.length / getItemsPerPage());
  }

  function getGap() {
    const style = window.getComputedStyle(slider);

    return parseFloat(style.columnGap || style.gap || 0);
  }

  function getItemWidth() {
    return items[0].getBoundingClientRect().width + getGap();
  }

  function updateDots() {
    if (!dots) return;

    dots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPage);
    });
  }

  function buildDots() {
    if (dots) {
      dots.remove();
    }

    dots = document.createElement("div");
    dots.className = "career-dots";

    const totalPages = getTotalPages();

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.setAttribute("aria-label", `Career page ${i + 1}`);

      dot.addEventListener("click", () => {
        goToPage(i);
        restartAutoSlide();
      });

      dots.appendChild(dot);
    }

    wrapper.appendChild(dots);
    updateDots();
  }

  function goToPage(page) {
    const totalPages = getTotalPages();

    currentPage = ((page % totalPages) + totalPages) % totalPages;

    const left =
      getItemWidth() * getItemsPerPage() * currentPage;

    slider.scrollTo({
      left: left,
      behavior: "smooth"
    });

    updateDots();
  }

  function nextPage() {
    const totalPages = getTotalPages();

    if (currentPage >= totalPages - 1) {
      goToPage(0);
    } else {
      goToPage(currentPage + 1);
    }
  }

  function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
      nextPage();
    }, 3500);
  }

  function stopAutoSlide() {
    if (autoSlide) {
      clearInterval(autoSlide);
      autoSlide = null;
    }
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  /* Update dot when user swipes or scrolls manually */
slider.addEventListener("scroll", () => {
  const pageWidth = getItemWidth() * getItemsPerPage();

  if (pageWidth <= 0) return;

  const detectedPage = Math.round(
    slider.scrollLeft / pageWidth
  );

  const totalPages = getTotalPages();

  currentPage = Math.max(
    0,
    Math.min(detectedPage, totalPages - 1)
  );

  updateDots();
});

  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  slider.addEventListener("touchstart", stopAutoSlide, {
    passive: true
  });

  slider.addEventListener("touchend", () => {
    setTimeout(startAutoSlide, 800);
  }, {
    passive: true
  });

  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      currentPage = 0;

      buildDots();

      slider.scrollTo({
        left: 0,
        behavior: "auto"
      });

      restartAutoSlide();
    }, 250);
  });

  buildDots();
  startAutoSlide();
});