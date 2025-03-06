const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
  
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //create a section element and store it in a variable named card
        const card = document.createElement("section");
        //create an h2 element and store it in a variable named "fullName"
        const fullName = document.createElement("h2");
        //birthdate and birthplace
        const birthdate = document.createElement("p");
        const birthplace = document.createElement("p");
        //create an img element and store it in a variable named "portrait"
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //build the image element by setting the src, alt, loading, width, and height attributes using setAttribute()
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.fullName);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "300");

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        //add the section card to the "cards" div
        cards.appendChild(card);
    })
}