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

// Dark mode section
const dark = document.querySelector("#dark");
const main = document.querySelector("main");

dark.addEventListener("click", () => {
	if (dark.textContent.includes("🔲")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		dark.textContent = "🔳";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		dark.textContent = "🔲";
	}
});

// ********* Page Visits Counter *********
// ********* Page Visits Counter *********
function updatePageVisitsCounter() {
    const visitsDisplay = document.querySelector(".visits");
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


    // Determine if this is the first visit or display the number of visits.
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `Welcome! This is your first visit.`;
    }

    numVisits++;

    // store the new visit count total into localStorage
    localStorage.setItem("numVisits-ls", numVisits);
}
updatePageVisitsCounter();

// Function to set value of hidden input field with current date/time in milliseconds
function setTimestamp() {
    document.getElementById("timestampmilli").value = Date.now();
}