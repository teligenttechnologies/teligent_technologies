// Toggle Mobile Menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


 const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.work-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      items.forEach(item => {
        const show = filter === 'all' || item.classList.contains(filter);
        item.classList.toggle('hidden', !show);
        item.classList.toggle('block', show); // or 'flex' if needed
      });

      // Optional: Button active style
      buttons.forEach(btn => btn.classList.remove('bg-[#b79b73]', 'text-black'));
      button.classList.add('bg-[#b79b73]', 'text-black');
    });
  });