document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("careerSlider");

  if (!slider) return;

  const wrapper = slider.closest(".career-slider-wrapper");
  const items = Array.from(slider.querySelectorAll(".career-item"));

  if (!wrapper || items.length === 0) return;

  let currentPage = 0;
  let autoSlide = null;
  let dots = null;

  function getItemsPerPage() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 4;
  }

  function getTotalPages() {
    return Math.ceil(items.length / getItemsPerPage());
  }

  function getItemWidth() {
    const firstItem = items[0];
    const styles = window.getComputedStyle(slider);

    const gap = parseFloat(
      styles.columnGap || styles.gap || 0
    );

    return firstItem.getBoundingClientRect().width + gap;
  }

  function updateDots() {
    if (!dots) return;

    dots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPage);
    });
  }

  function goToPage(page) {
    const totalPages = getTotalPages();

    currentPage = ((page % totalPages) + totalPages) % totalPages;

    const scrollPosition =
      getItemWidth() * getItemsPerPage() * currentPage;

    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });

    updateDots();
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
        currentPage = i;
        goToPage(currentPage);
        restartAutoSlide();
      });

      dots.appendChild(dot);
    }

    wrapper.appendChild(dots);
    updateDots();
  }

  function nextPage() {
    goToPage(currentPage + 1);
  }

  function stopAutoSlide() {
    if (autoSlide) {
      clearInterval(autoSlide);
      autoSlide = null;
    }
  }

  function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
      nextPage();
    }, 3500);
  }

  function restartAutoSlide() {
    startAutoSlide();
  }

  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  slider.addEventListener("touchstart", stopAutoSlide, {
    passive: true
  });

  slider.addEventListener("touchend", startAutoSlide, {
    passive: true
  });

  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      currentPage = 0;

      buildDots();
      goToPage(0);
      restartAutoSlide();
    }, 200);
  });

  buildDots();
  startAutoSlide();
});