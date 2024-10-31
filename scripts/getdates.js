// ************ Create date and last modified date for the footer ************
// Display the copyright year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    return `Last Modified: ${lastModified}`;
}
document.getElementById("lastModified").innerHTML = getLastModified();

// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ********* Page Visits Counter *********
function updatePageVisitsCounter() {
    let numVisits = Number(window.localStorage.getItem("numVisitsCounter")) || 0;
    const visitsDisplay = document.querySelector(".visits");

    // Determine if this is the first visit or display the number of visits.
    if (numVisits === 0) {
        visitsDisplay.textContent = `Welcome! This is your first visit.`;
    } else {
        visitsDisplay.textContent = numVisits + 1;
    }

    // store the new visit count total into localStorage
    localStorage.setItem("numVisitsCounter", numVisits);
}
updatePageVisitsCounter();