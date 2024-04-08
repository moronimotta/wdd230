const baseURL = "https://moronimotta.github.io/wdd230/"
const linksURL = baseURL + "scoots/data/rentals.json";

const dataStored = [];

async function getRentals() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        dataStored.push(data);
        displayRentals(data.rentals);
    } catch (error) {
        console.error(error);
    }
}   

getRentals();

const displayRentals = (rentals) => {
    const rentalData = rentals["Max Rental Pricing"]["Rental Type"];
    const table = document.createElement("table");

    const section = document.getElementsByTagName("section")[0];

    for (const rental in rentalData) {
        const rentalInfo = rentalData[rental];
        const row = document.createElement("tr");

        const rentalTypeCell = document.createElement("td");
        rentalTypeCell.textContent = rental;
        row.appendChild(rentalTypeCell);

        const maxPersonsCell = document.createElement("td");
        maxPersonsCell.textContent = rentalInfo["Max. Persons"];
        row.appendChild(maxPersonsCell);

        const halfDayCell = document.createElement("td");
        halfDayCell.textContent = rentalInfo["Half Day (3 hrs)"];
        row.appendChild(halfDayCell);

        const fullDayCell = document.createElement("td");
        fullDayCell.textContent = rentalInfo["Full Day"];
        row.appendChild(fullDayCell);

        table.appendChild(row);
    }

    section.appendChild(table);
}