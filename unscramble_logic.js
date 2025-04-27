/*
 * //////////////////////////////////////////////////////////////////////
 *      PROGRAM: UNSCRAMBLE_ME/SCRIPTS.JS
 *      Written by Nishan Subba
 *      GitHub: @nisSubba2024
 *      Purpose: Logic to unscramble word
 *      Last Date Modified: Dec 31, 2024
 * //////////////////////////////////////////////////////////////////////
 */
const wordHashMap = new Map()
const scrambledWord = document.getElementById("scrambled-word");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const unscrambledField = document.getElementById("unscrambled-field");
const sectionTitle = document.querySelector(".section-title");
const buttonTag = document.querySelectorAll(".btn");

// fetch data and process based on user input
async function fetchData() {
    try {
        const response = await fetch("words.txt");
        const data = await response.text();
        const wordArray = data.split("\n");
        hashMap(wordArray);
    } catch (error) {
        console.log("Error loading word list: ", error);
    }
}

function hashMap(wordBank) {
    for (let word of wordBank) {
        let splitWord = word.toLowerCase().split("");
        let sortWord = splitWord.sort().join("");
        if (wordHashMap.has(sortWord)) {
            wordHashMap.get(sortWord).push(word);
        } else {
            wordHashMap.set(sortWord, [word]);
        }
    }
}

function createWordCard(unscrambledWordList) {
    console.log(unscrambledWordList);
    for (let word of unscrambledWordList) {
        const createDiv = document.createElement("div");
        unscrambledField.appendChild(createDiv);
        createDiv.classList.add("card");
        const createP = document.createElement("p");
        createP.classList.add("word");
        createP.textContent = `${word}`;
        createDiv.appendChild(createP);

    }
}

function titleCase(unscrambledWordList) {
    const updatedWordList = [];
    for (let word of unscrambledWordList) {
        let splitWord = word.split("");
        splitWord[0] = splitWord[0].toUpperCase();
        let joinWord = splitWord.join("");
        updatedWordList.push(joinWord);
    }

    return updatedWordList;
}

function validateUserInput(word) {
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(word);
}

function removeSibling(firstSibling) {
    while (firstSibling.nextElementSibling) {
        firstSibling.nextElementSibling.remove();
    }

    while (firstSibling.previousElementSibling) {
        firstSibling.previousElementSibling.remove();
    }

}

resetBtn.addEventListener("click", function () {
    scrambledWord.value = "";
    unscrambledField.classList.add("hide");
    removeSibling(sectionTitle);
})

buttonTag.forEach(tag => {
    tag.addEventListener("mouseover", function (event) {
        const xPos = (event.pageX - this.offsetLeft);
        const yPos = (event.pageY - this.offsetTop);

        this.style.setProperty("--x-pos", xPos + "px");
        this.style.setProperty("--y-pos", yPos + "px");
    })
})

submitBtn.addEventListener("click", function () {
    const scrambledWordValue = scrambledWord.value.toLowerCase();
    if (!validateUserInput(scrambledWordValue)) {
        alert("Please enter a valid scrambled word");
    } else {
        unscrambledField.classList.remove("hide");
        removeSibling(sectionTitle);
        const splitScrambledWord = scrambledWordValue.split("").sort().join("");
        const lowerCaseWord = splitScrambledWord.toLowerCase();
        const unscrambledWord = wordHashMap.get(lowerCaseWord);
        const titleCaseWordList = titleCase(unscrambledWord);
        createWordCard(titleCaseWordList);
    }
})

window.onload = fetchData;
