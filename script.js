document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll("nav ul li a");
  const subContents = document.querySelectorAll('.sub-content');

  tabs.forEach(tab => {
    tab.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Hide all sections except the target section
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
          if (section !== targetSection) {
            section.style.display = 'none';
          }
        });

        // Show target section
        targetSection.style.display = 'block';

        // Hide all sub-contents
        subContents.forEach(content => {
          content.style.display = 'none';
        });
      }
    });
  });

  subContents.forEach(content => {
    content.style.display = 'none';
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      const targetContent = document.getElementById(target);

      tabs.forEach(tab => tab.classList.remove('active'));
      subContents.forEach(content => content.style.display = 'none');

      tab.classList.add('active');
      targetContent.style.display = 'block';
    });
  });
});
