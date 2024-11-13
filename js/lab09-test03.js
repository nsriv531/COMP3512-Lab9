document.addEventListener("DOMContentLoaded", () => {
    // Select all <div> elements with the class "panel"
    const panels = document.querySelectorAll(".panel");
  
    // Loop through each panel and add a click event listener
    panels.forEach(panel => {
      panel.addEventListener("click", () => {
        // Toggle the "open" class on the clicked panel
        panel.classList.toggle("open");
      });
    });
  });
  