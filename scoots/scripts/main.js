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

// *********** Rentals Table Data *********

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("rentalData");

  // Only run this if the rental table is present
  if (tableBody) {
    fetch("data/rentals.json")
      .then((response) => response.json())
      .then((data) => {
        data.rentals.forEach((rental) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${rental.type}</td>
              <td>${rental.maxPersons}</td>
              <td>$${rental.pricing.reservation.halfDay}</td>
              <td>$${rental.pricing.reservation.fullDay}</td>
              <td>$${rental.pricing.walkIn.halfDay}</td>
              <td>$${rental.pricing.walkIn.fullDay}</td>
            `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error loading rental data:", error));
  }
});
