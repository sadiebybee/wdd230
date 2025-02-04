// javaScript for the BOM lesson bom.html

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// function to capitalize first letter of input value
function capitalizeFirstLetter(string) {
    // Ensure input string is converted to lowercase first
    string = string.toLowerCase();
    // Capitalize the first letter and concatenate it with the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to capitalize first letter of each word in input value
function capitalizeWords(string) {
    // Split the string by whitespace characters
    const words = string.split(/\s+/);

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
        // Capitalize the first letter of the word
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        // Keep the rest of the word unchanged
        const restOfWord = word.slice(1);
        // Return the capitalized word
        return capitalizedFirstLetter + restOfWord;
    });

    // Join the words back together with whitespace and return the result
    return capitalizedWords.join(" ");
}

const bookOfMormon = [
    {
        title: "1 Nephi",
        chapters: 22,
    },
    {
        title: "2 Nephi",
        chapters: 33,
    },
    {
        title: "Jacob",
        chapters: 7,
    },
    {
        title: "Enos",
        chapters: 1,
    },
    {
        title: "Jarom",
        chapters: 1,
    },
    {
        title: "Omni",
        chapters: 1,
    },
    {
        title: "Words Of Mormon",
        chapters: 1,
    },
    {
        title: "Mosiah",
        chapters: 29,
    },
    {
        title: "Alma",
        chapters: 63,
    },
    {
        title: "Helaman",
        chapters: 16,
    },
    {
        title: "3 Nephi",
        chapters: 30,
    },
    {
        title: "4 Nephi",
        chapters: 1,
    },
    {
        title: "Mormon",
        chapters: 9,
    },
    {
        title: "Ether",
        chapters: 15,
    },
    {
        title: "Moroni",
        chapters: 10,
    },
];

// function to check if book and chapter number are valid
function checkBookChapter(bookTitle, chapterNumber) {
    for (const book of bookOfMormon) {
        if (book.title === bookTitle) {
            if (chapterNumber >= 1 && chapterNumber <= book.chapters) {
                return `${book.title} ${chapterNumber}`;
            } else {
                return alert(`${book.title} does not have this many chapters ${chapterNumber}`);
            }
        }
    }
    return alert(`Book ${bookTitle} not found in the Book of Mormon`);
}

// Add event listener to input field to allow user to press enter key to submit
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // console.log(event);
        // alert("Enter key pressed");
        button.click();
    }
});

// First Attempt anonymous function
button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");
        //call function to capitalize first letter of input value
        listItem.textContent = capitalizeWords(input.value.trim());

        const userInfo = listItem.textContent.split(" ");
        // Split the input value into an array of words and join them back together with a space
        const bookTitle = userInfo.slice(0, -1).join(" ");
        // Convert the chapter number to an integer from the last element of the array
        const chapterNumber = parseInt(userInfo[userInfo.length - 1]);
        // console.log(bookTitle, chapterNumber);

        listItem.textContent = checkBookChapter(bookTitle, chapterNumber);

        if (listItem.textContent !== "") {
            // create delete button to append to list item
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            listItem.append(deleteButton);

            list.append(listItem);
            input.value = "";
            input.focus();

            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
                input.focus();
            });
        } else {
            input.value = "";
            input.focus();
            return;
        }
    } else {
        alert("You must enter a book name and chapter number");
        input.focus();
        return;
    }
});