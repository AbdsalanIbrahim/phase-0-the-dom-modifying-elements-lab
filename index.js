// index.js

document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("addButton");
  const itemInput = document.getElementById("itemInput");
  const myList = document.getElementById("myList");

  // Function to add a new list item
  addButton.addEventListener("click", function() {
      const itemText = itemInput.value.trim(); // Get the input text and trim whitespace
      if (itemText) { // Check if input is not empty
          const li = document.createElement("li");
          li.textContent = itemText; // Set the text of the list item
          myList.appendChild(li); // Append the new list item to the unordered list
          itemInput.value = ""; // Clear the input field after adding
      } else {
          alert("Please enter a valid item."); // Alert if input is empty
      }
  });
});
