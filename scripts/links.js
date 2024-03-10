const baseURL = "https://moronimotta.github.io/wdd230/"

const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const weekContainer = document.createElement("div");
        weekContainer.classList.add("week-container");

        const weekTitle = document.createElement("h2");
        weekTitle.textContent = `Lesson ${week.lesson}`;
        weekContainer.appendChild(weekTitle);

        week.links.forEach((link) => {
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            const linkItem = document.createElement("li");
            linkItem.appendChild(linkElement);

            const linkList = document.createElement("ul");
            linkList.appendChild(linkItem);

            weekContainer.appendChild(linkList);
        });

        const linksDiv = document.getElementById("links");
        linksDiv.appendChild(weekContainer);
    });
}


getLinks();