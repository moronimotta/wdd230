const baseURL = "https://moronimotta.github.io/wdd230/"

const linksURL = baseURL + "chamber/data/members.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const dataStored = [];

async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        dataStored.push(data);
        displayMembers(data.companies);
    } catch (error) {
        console.error(error);
    }
}

getMembers();

const displayMembers = (companies) => {
    const membersContainer = document.querySelector("#members");
    companies.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("picture-card");
        image.src = member.image;
        image.alt = member.name;
        card.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = member.name;
        card.appendChild(name);

        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        card.appendChild(phone);

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        card.appendChild(website);

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = "Membership Level: " + member.membership_level;
        card.appendChild(membershipLevel);

        const otherInformation = document.createElement("p");
        otherInformation.textContent = member.other_information;
        card.appendChild(otherInformation);

        membersContainer.appendChild(card);
    });
}


const displayMembersTable = (companies) => {
    const membersContainer = document.querySelector("#members");
    const table = document.createElement("table");
    table.classList.add("table");

    const header = document.createElement("tr");
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    header.appendChild(nameHeader);
    const addressHeader = document.createElement("th");
    addressHeader.textContent = "Address";
    header.appendChild(addressHeader);
    const phoneHeader = document.createElement("th");
    phoneHeader.textContent = "Phone";
    header.appendChild(phoneHeader);
    const websiteHeader = document.createElement("th");
    websiteHeader.textContent = "Website";
    header.appendChild(websiteHeader);
    const membershipLevelHeader = document.createElement("th");
    membershipLevelHeader.textContent = "Membership Level";
    header.appendChild(membershipLevelHeader);
    const otherInformationHeader = document.createElement("th");
    otherInformationHeader.textContent = "Other Information";
    header.appendChild(otherInformationHeader);
    table.appendChild(header);

    companies.forEach((member) => {
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.textContent = member.name;
        row.appendChild(name);

        const address = document.createElement("td");
        address.textContent = member.address;
        row.appendChild(address);

        const phone = document.createElement("td");
        phone.textContent = member.phone;
        row.appendChild(phone);

        const website = document.createElement("td");
        const link = document.createElement("a");
        link.href = member.website;
        link.textContent = "Visit Website";
        website.appendChild(link);
        row.appendChild(website);

        const membershipLevel = document.createElement("td");
        membershipLevel.textContent = member.membership_level;
        row.appendChild(membershipLevel);

        const otherInformation = document.createElement("td");
        otherInformation.textContent = member.other_information;
        row.appendChild(otherInformation);

        table.appendChild(row);
    });

    membersContainer.appendChild(table);
}

gridbutton.addEventListener("click", () => {
    const membersContainer = document.querySelector("#members");
    membersContainer.innerHTML = "";
    displayMembers(dataStored[0].companies);
}
);

listbutton.addEventListener("click", () => {
    const membersContainer = document.querySelector("#members");
    membersContainer.innerHTML = "";
    displayMembersTable(dataStored[0].companies);
}
);



