// Display the date and year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// Display the last modified date of the page
const options = {
    month: "short",
		day: "numeric",
		year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
};

function getLastModified() {
    const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options);
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

// ******** Dark mode section ***********
const dark = document.querySelector("#dark");
const main = document.querySelector("main");

dark.addEventListener("click", () => {
	if (dark.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		dark.textContent = "🔅";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		dark.textContent = "🕶️";
	}
});

document.addEventListener("DOMContentLoaded", function() {
    // ********* Page Visits Counter *********
    function updatePageVisitsCounter() {
        const visitsDisplay = document.querySelector(".visits");
        if (!visitsDisplay) {
            console.error("Element with class 'visits' not found.");
            return;
        }

        let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

        // Determine if this is the first visit or display the number of visits.
        if (numVisits !== 0) {
            visitsDisplay.textContent = numVisits + " Welcome back!";
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
});
