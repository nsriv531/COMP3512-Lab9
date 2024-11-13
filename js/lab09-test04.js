document.addEventListener("DOMContentLoaded", () => {
    // 1. Event handler for each thumbnail image to update the main image and caption
    const mainImage = document.querySelector("#imgManipulated img");
    const figcaption = document.querySelector("#imgManipulated figcaption");
    const thumbnails = document.querySelectorAll("#thumbBox img");
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        // Update the src of the main image to the clicked thumbnail, changing 'small' to 'medium'
        const newSrc = thumbnail.src.replace("small", "medium");
        mainImage.src = newSrc;
  
        // Update the figcaption with the title and artist information from the alt and title attributes
        figcaption.innerHTML = `<em>${thumbnail.alt}</em><br><span>${thumbnail.title}</span>`;
      });
    });
  
    // 2. Event handler for range sliders to adjust filter properties on the main image
    const sliders = document.querySelectorAll(".sliders");
    const filterValues = {
      opacity: "100",
      saturate: "100",
      brightness: "100",
      hueRotate: "0",
      grayscale: "0",
      blur: "0"
    };
  
    sliders.forEach(slider => {
      slider.addEventListener("input", (event) => {
        const id = event.target.id;
        const value = event.target.value;
  
        // Update corresponding filter value
        switch (id) {
          case "sliderOpacity":
            filterValues.opacity = value;
            document.getElementById("numOpacity").textContent = value;
            break;
          case "sliderSaturation":
            filterValues.saturate = value;
            document.getElementById("numSaturation").textContent = value;
            break;
          case "sliderBrightness":
            filterValues.brightness = value;
            document.getElementById("numBrightness").textContent = value;
            break;
          case "sliderHue":
            filterValues.hueRotate = value;
            document.getElementById("numHue").textContent = value;
            break;
          case "sliderGray":
            filterValues.grayscale = value;
            document.getElementById("numGray").textContent = value;
            break;
          case "sliderBlur":
            filterValues.blur = value;
            document.getElementById("numBlur").textContent = value;
            break;
        }
  
        // Apply filters to the main image
        mainImage.style.filter = `
          opacity(${filterValues.opacity}%)
          saturate(${filterValues.saturate}%)
          brightness(${filterValues.brightness}%)
          hue-rotate(${filterValues.hueRotate}deg)
          grayscale(${filterValues.grayscale}%)
          blur(${filterValues.blur}px)
        `;
      });
    });
  
    // 3. Event listener for the reset button to clear filters
    const resetButton = document.getElementById("resetFilters");
    resetButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission if button is in a form
  
      // Reset all slider values and display text
      filterValues.opacity = "100";
      filterValues.saturate = "100";
      filterValues.brightness = "100";
      filterValues.hueRotate = "0";
      filterValues.grayscale = "0";
      filterValues.blur = "0";
  
      // Update slider elements
      document.getElementById("sliderOpacity").value = "100";
      document.getElementById("sliderSaturation").value = "100";
      document.getElementById("sliderBrightness").value = "100";
      document.getElementById("sliderHue").value = "0";
      document.getElementById("sliderGray").value = "0";
      document.getElementById("sliderBlur").value = "0";
  
      // Update display text
      document.getElementById("numOpacity").textContent = "100";
      document.getElementById("numSaturation").textContent = "100";
      document.getElementById("numBrightness").textContent = "100";
      document.getElementById("numHue").textContent = "0";
      document.getElementById("numGray").textContent = "0";
      document.getElementById("numBlur").textContent = "0";
  
      // Remove filters from the main image
      mainImage.style.filter = "none";
    });
  });
  