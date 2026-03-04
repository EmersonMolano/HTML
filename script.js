const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("active");
    });
});