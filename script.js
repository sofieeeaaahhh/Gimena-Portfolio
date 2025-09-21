document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
    })
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === #${current}) {
      link.classList.add("active");
    }
  });


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  form.reset();
});


