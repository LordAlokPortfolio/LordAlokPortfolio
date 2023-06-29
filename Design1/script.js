document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll("nav ul li a");

  tabs.forEach(tab => {
    tab.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Hide all sections
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
          section.style.display = "none";
        });

        // Show target section
        targetSection.style.display = "block";
      }
    });
  });
});

function openTab(tabId) {
  const subContents = document.querySelectorAll('.sub-content');

  subContents.forEach(content => {
    content.style.display = 'none';
  });

  document.getElementById(tabId).style.display = 'block';

  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
    tab.style.backgroundColor = "blue";
  });

  const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
  selectedTab.classList.add("active");
  selectedTab.style.backgroundColor = "green";
}
