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
