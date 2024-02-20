const visitsDisplay = document.getElementById('visits');

let numVisits = Number(window.localStorage.getItem('visits-ls'));

if (!numVisits) {
  visitsDisplay.textContent = 'This your first visit, awesome! Welcome to my site!';
}else {
    visitsDisplay.textContent = ` ${numVisits}`;
}

numVisits++;

window.localStorage.setItem('visits-ls', numVisits);
