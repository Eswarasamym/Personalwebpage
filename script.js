// Currently, no JavaScript is needed for the functionality shown in the screenshot.
// You can add interactive features here if needed in the future.
function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const dob = document.getElementById("dob");

  // Example of dynamically updating content
  phone.textContent = "+917826991751";
  email.textContent = "eswarsamy87@gmail.com";
  address.textContent = "500 Terry Francine Street, San Francisco, CA 94158";
  dob.textContent = "March 13th, 2004";
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
