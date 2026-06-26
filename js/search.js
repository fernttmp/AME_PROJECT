const input = document.getElementById("siteSearchInput");

const results = document.getElementById("siteSearchResults");

if (input && results) {

  input.addEventListener("input", () => {

    const keyword = input.value.toLowerCase().trim();

    if (!keyword) {

      results.innerHTML = "";

      results.classList.remove("active");

      return;

    }

    const matched = searchData.filter(item =>

      item.title.toLowerCase().includes(keyword)

      ||

      item.keywords.toLowerCase().includes(keyword)

    );

    if (matched.length === 0) {

      results.innerHTML = `

        <div class="search-item">

          ไม่พบข้อมูล

        </div>

      `;

    }

    else {

      results.innerHTML = matched

        .slice(0,6)

        .map(item => `

          <a

            href="${item.url}"

            class="search-item"

          >

            ${item.title}

          </a>

        `)

        .join("");

    }

    results.classList.add("active");

  });

  document.addEventListener("click", (e) => {

    if (!e.target.closest(".site-search")) {

      results.classList.remove("active");

    }

  });

}