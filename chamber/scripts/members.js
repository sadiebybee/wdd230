const baseURL = "https://sadiebybee.github.io/wdd230/";
const membersURL = "https://sadiebybee.github.io/wdd230/chamber/data/members.json";

async function getMembersData() {
    const response = await fetch(membersURL);  // Fixed url reference
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    const cards = document.querySelector("#members");

    members.forEach((member) => {
        const bizCard = document.createElement("section");
        bizCard.setAttribute("class", "member");
        
        const companyName = document.createElement("h3");
        companyName.textContent = member.company;
        
        const address = document.createElement("p");
        const address2 = document.createElement("p");
        address.textContent = member.address;
        address2.textContent = `${member.city}, ${member.state} ${member.zip}`;
        
        const phone = document.createElement("p");
        phone.textContent = member.phone;
        
        const website = document.createElement("a");
        website.setAttribute("href", `https://${member.website}`);
        website.textContent = member.website;

        const logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.company.toLowerCase()}-logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "75");
        logo.setAttribute("height", "auto");

        bizCard.appendChild(logo);
        bizCard.appendChild(companyName);
        bizCard.appendChild(address);
        bizCard.appendChild(address2);
        bizCard.appendChild(phone);
        bizCard.appendChild(website);

        cards.appendChild(bizCard);
    });
};

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const display = document.querySelector("#members");  // more specific selector

gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}