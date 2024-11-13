/* add code after this comment */

// 1. Add a border to the <ul> element with the id "thumb-list" using getElementById
const ulElement = document.getElementById("thumb-list");
ulElement.style.border = "2px solid black";

// 2. Set the value of the <textarea> to the text content of the <p> element within the <fieldset>
const textarea = document.getElementById("msg");
const paragraph = document.querySelector("fieldset p");
textarea.value = paragraph.textContent;

// 3. Add a box shadow to each <img> element within the <ul> using querySelectorAll and a loop
const images = document.querySelectorAll("#thumb-list img");
images.forEach((img) => {
    img.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
});
