const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  openIcon.classList.toggle('active');
  closeIcon.classList.toggle('active');
});

  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "block";
          item.style.animation = "fadeInUp 0.5s ease forwards";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Click to open image link (example)
  document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const url = img.getAttribute("data-link") || "#";
      window.open(url, "_blank");
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1); // # hatao
      const targetSection = document.getElementById(targetID);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
