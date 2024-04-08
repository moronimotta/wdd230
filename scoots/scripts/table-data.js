const baseURL = "https://moronimotta.github.io/wdd230/"
const linksURL = baseURL + "scoots/data/rentals.json";

const dataStored = [];

async function getRentals() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        dataStored.push(data);
        displayRentals(data);
    } catch (error) {
        console.error(error);
    }
}   

getRentals();

function displayRentals(data) {
    const rentals = data.rentals;
    const table = document.querySelector('.rentals-table');
    const tbody = document.createElement('tbody');
    rentals.forEach(rental => {
        const row = document.createElement('tr');
        const type = document.createElement('td');
        const maxPersons = document.createElement('td');
        const reservation = document.createElement('td');
        const walkIn = document.createElement('td');
        const halfDay = document.createElement('td');
        const fullDay = document.createElement('td');
        type.textContent = rental.type;
        maxPersons.textContent = rental.maxPersons;
        reservation.textContent = rental.reservation;
        walkIn.textContent = rental.walkIn;
        halfDay.textContent = rental.halfDay;
        fullDay.textContent = rental.fullDay;
        row.appendChild(type);
        row.appendChild(maxPersons);
        row.appendChild(reservation);
        row.appendChild(walkIn);
        row.appendChild(halfDay);
        row.appendChild(fullDay);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}