document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelectorAll("[data-search-btn]");

  searchBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const searchField = el.previousElementSibling;
      searchField.classList.toggle("active");
    });
  });
});
