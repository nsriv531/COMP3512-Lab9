const photos = JSON.parse(content);

const parentSection = document.getElementById("parent");

// Function to create a figure for each photo
photos.forEach(photo => {
   // Create a <figure> element
   const figure = document.createElement("figure");

   // Create an <img> element and set src and alt attributes
   const img = document.createElement("img");
   img.src = `images/${photo.filename}`;
   img.alt = photo.title;
   figure.appendChild(img);

   // Create a <figcaption> element
   const figcaption = document.createElement("figcaption");

   // Create an <h2> element for the title
   const h2 = document.createElement("h2");
   h2.textContent = photo.title;
   figcaption.appendChild(h2);

   // Create a <p> element for the description
   const p = document.createElement("p");
   p.textContent = photo.description;
   figcaption.appendChild(p);

   // Loop through colors array to create <span> elements
   photo.colors.forEach(color => {
      const span = document.createElement("span");
      span.style.backgroundColor = color.hex;
      figcaption.appendChild(span);
   });

   // Append <figcaption> to <figure>
   figure.appendChild(figcaption);

   // Append <figure> to the parent section
   parentSection.appendChild(figure);
});