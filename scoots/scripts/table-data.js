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
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headers = ["Name", "Max Persons", "Half Day Price", "Full Day Price"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    data.rentals.forEach((rental) => {
        const row = document.createElement("tr");
        const { name, maxPersons, halfDayPrice, fullDayPrice } = rental;
        const rowData = [name, maxPersons, halfDayPrice, fullDayPrice];
        rowData.forEach((data) => {
            const td = document.createElement("td");
            td.textContent = data;
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);

    document.getElementsByTagName("section")[0].appendChild(table);
}