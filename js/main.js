const slider = document.getElementById("careerSlider");

if (slider) {
  const items = slider.querySelectorAll(".career-item");
  const wrapper = slider.closest(".career-slider-wrapper");

  let currentPage = 0;
  let autoSlide;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const dots = document.createElement("div");
  dots.className = "career-dots";

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("button");
    dot.type = "button";

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentPage = i;
      goToPage(currentPage);
      restartAutoSlide();
    });

    dots.appendChild(dot);
  }

  wrapper.appendChild(dots);

  function goToPage(page) {
    const itemWidth = items[0].offsetWidth + 30;
    slider.scrollTo({
      left: itemWidth * itemsPerPage * page,
      behavior: "smooth"
    });

    dots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("active", index === page);
    });
  }

  function nextPage() {
    currentPage++;

    if (currentPage >= totalPages) {
      currentPage = 0;
    }

    goToPage(currentPage);
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextPage, 3500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
}