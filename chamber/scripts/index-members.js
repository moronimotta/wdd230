const baseURL = "https://moronimotta.github.io/wdd230/"

const linksURL = baseURL + "chamber/data/members.json";

const dataStored = [];

async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        dataStored.push(data);
        console.log(data);
        displayRandomMembers(data.companies);
    } catch (error) {
        console.error(error);
    }
}

getMembers();

function displayRandomMembers(data) {
    // select the spotlights section
    const spotlights = document.querySelector("#spotlights-section");
    // select the companies array from dataStored
    const companies = data;
    // create an array to store the random members
    const randomMembers = [];
    // create a while loop to select 3 random members
    while (randomMembers.length < 3) {
        const randomIndex = Math.floor(Math.random() * companies.length);
        if (randomMembers.indexOf(companies[randomIndex]) === -1) {
            randomMembers.push(companies[randomIndex]);
        }
    }
    // create a h2 element
    const title = document.createElement("h2");
    title.textContent = "Member spotlights";
    spotlights.appendChild(title);
    // create a loop to display the random members
    randomMembers.forEach((member) => {
        const name = document.createElement("h3");
        name.textContent = member.name;
        spotlights.appendChild(name);
        const paragraph = document.createElement("p");
        paragraph.textContent = "As a dedicated member of Campos do Jordao Chamber of Commerce, " + member.name + " brings a wealth of experience in " + member.membership_level + ". Her commitment to fostering collaboration and driving economic growth in our community is truly commendable. " + member.name + "'s innovative ideas and tireless efforts have played a significant role in shaping the success of our chamber.";
        spotlights.appendChild(paragraph);
    });


}

displayRandomMembers();
