const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

// Toggle the dropdown menu
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

// Close the dropdown menu when a link is clicked
nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("active");
    menu.classList.remove("bx-x");
  }
});

//contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxYy_2O1B5q3r7KJ9JB1ttT9ZXwGOSuFauXz9nEWC4MgweQwUx754wYYx6RcoxtCzQ/exec";
const form = document.forms["contact-form"];
const success = document.getElementById("success");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      success.innerHTML = "Message Sent Successfully;";

      setTimeout(function () {
        success.innerHTML = "";
      }, 2000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
