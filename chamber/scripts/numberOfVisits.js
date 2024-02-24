const visitsDisplay = document.getElementById('visits');

let numVisits = Number(window.localStorage.getItem('discover-visits-ls'));
let lastVisit = Number(window.localStorage.getItem('discover-last-visit-ls'));

let now = Date.now();
let oneDay = 24 * 60 * 60 * 1000; 

if (!numVisits) {
  alert("Welcome! Let us know if you have any questions.");
  visitsDisplay.textContent = 'Welcome! Enjoy your first visit!';
} else if (now - lastVisit < oneDay) {
  visitsDisplay.textContent = 'Back so soon! Awesome!';
} else {
  let daysSinceLastVisit = Math.floor((now - lastVisit) / oneDay);
  visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
}

numVisits++;
window.localStorage.setItem('discover-visits-ls', numVisits);
window.localStorage.setItem('discover-last-visit-ls', now);

