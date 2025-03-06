// Hamburger nav //
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//Projects //
const container = document.querySelector(".projects-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const scrollAmount = 270; // 250px width + 20px gap

leftBtn.addEventListener("click", () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightBtn.addEventListener("click", () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

//Contact//
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents default form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contact-form").reset(); // Clears the form
  } else {
    alert("Please fill out all fields.");
  }
});

