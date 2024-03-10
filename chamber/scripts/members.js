const baseURL = "https://moronimotta.github.io/wdd230/"

const linksURL = baseURL + "data/members.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error(error);
    }
}

const displayMembers = (members) => {
    const membersContainer = document.querySelector("#members");
    members.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
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