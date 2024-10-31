// javaScript for the BOM lesson bom.html

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

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
function checkBookChapter(userInput) {
    let userInfo = userInput.split(" ");
    // Split the input value into an array of words and join them back together with a space
    const bookTitle = userInfo.slice(0, -1).join(" ");
    // Convert the chapter number to an integer from the last element of the array
    const chapterNumber = parseInt(userInfo[userInfo.length - 1]);
    console.log(bookTitle, chapterNumber);

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
    // console.log(input.value);
    if (input.value != "") {
         //call function to capitalize first letter of input value
        bofm = capitalizeWords(input.value);
          // call function to check if book and chapter number are valid
        scripture = checkBookChapter(bofm);
        // add scripture to array
        chaptersArray.push(scripture);
        // save array to local storage
        setChapterList();
        // call function to display list
        displayList(scripture);
        input.value = "";
        input.focus();
    } else {
        alert("You must enter a book name and chapter number");
        input.value = "";
        input.focus();
        return;
    }
});

function displayList(item) {
    // create list item to append to list
    let listItem = document.createElement("li");
    listItem.textContent = item;
    // create delete button to append to list item
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    if (listItem.textContent !== "") {
        // append list item to list
        list.append(listItem);
        // append delete button to list item
        listItem.append(deleteButton);
    } else {
        input.value = "";
        input.focus();
        return;
    }
    // add event listener to delete button
    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });

    input.focus();
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});