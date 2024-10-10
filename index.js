// Create a new 'div' element
const newDiv = document.createElement("div");

// Add a heading inside the div
const heading = document.createElement("h1");
heading.textContent = "Welcome to My Dynamic DOM Page!";
newDiv.append(heading);

// Append the 'div' to the body so it appears on the page
document.body.append(newDiv);

// Create an unordered list (ul) element
const ul = document.createElement("ul");

// Use a loop to create 5 list items (li) and append them to the ul
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i + 1}`; // Each list item has a unique name
  ul.append(li); // Append the li to the ul
}

// Append the ul to the div we created earlier
newDiv.append(ul);

// Add some more content using innerHTML
newDiv.innerHTML += "<p>This paragraph is added dynamically inside the div!</p>";

// Create another section of content
const infoSection = document.createElement("div");
infoSection.innerHTML = `
  <h2>Additional Information</h2>
  <p>This section provides more details about dynamic DOM manipulation using JavaScript. 
     You can add elements, modify content, and update styles programmatically!</p>
`;
newDiv.append(infoSection);

// Modify the 'div' content style
newDiv.style.backgroundColor = "#F0E68C"; // Light khaki background
newDiv.style.padding = "20px";
newDiv.style.border = "2px solid #27647B"; // Border for styling
newDiv.style.fontFamily = "Arial, sans-serif";

// Add a class to the 'div'
newDiv.classList.add("content-container");

// Remove the second list item from the unordered list
const secondItem = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondItem);

// Add a custom message with your name
const customMessage = document.createElement("h2");
customMessage.textContent = "Abdisalan is the champion!";
customMessage.style.color = "#27647B"; // Style the custom message
customMessage.style.textAlign = "center";
document.body.append(customMessage);

// Add a footer section to the page
const footer = document.createElement("footer");
footer.innerHTML = `
  <p>Created by Abdisalan Ibrahim - Dynamic Webpage Example</p>
  <p>&copy; 2024</p>
`;
footer.style.backgroundColor = "#27647B";
footer.style.color = "white";
footer.style.padding = "10px";
footer.style.textAlign = "center";
document.body.append(footer);
