// script.js
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
          section.classList.remove("active");
        });

        // Show target section
        targetSection.classList.add("active");
      }
    });
  });
});
