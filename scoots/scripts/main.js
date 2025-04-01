
// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ******** Banner Announcement ************

function closeBanner() {
    const banner = document.getElementById("announcementBanner");
    banner.style.display = "none";
  }
