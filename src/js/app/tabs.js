document.addEventListener("DOMContentLoaded", () => {
  initTabs();
});

function initTabs() {
  const tabsBtn = document.querySelectorAll("[data-tabs-trigger]");
  const tabsItems = document.querySelectorAll("[data-tabs-list]");

  tabsBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const currentBtn = item;
      const tabId = currentBtn.getAttribute("data-tabs");
      const currentTab = document.getElementById(tabId);

      if (!currentTab.classList.contains("active")) {
        tabsBtn.forEach((item) => {
          item.classList.remove("active");
        });

        tabsItems.forEach((item) => {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      } else if (currentTab.classList.contains("active")) {

        currentBtn.classList.remove("active");
        currentTab.classList.remove("active");
      }
    });
  });
}


