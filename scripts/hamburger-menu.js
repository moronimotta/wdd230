document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.mainMenu'); 
    const hamburgerBtn = document.getElementById('hamburgerMenu');
  
    if (nav && hamburgerBtn) {
      hamburgerBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
  
        const isOpen = nav.classList.contains('active');
        hamburgerBtn.innerHTML = isOpen ? '&#10005;' : '&#8801;';
      });
    }
  });
  