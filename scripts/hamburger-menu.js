document.getElementById('hamburgerMenu').addEventListener('click', function () {
  var nav = document.querySelector('.mainMenu');

  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});
