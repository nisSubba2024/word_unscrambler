# Unscramble Me - A Word Unscramble

Unscramble Me is a web app that helps users unscramble words by matching them against a word bank.

## Demo
Please try out my demo here: https://nissubba2024.github.io/word_unscrambler/

## Features
- Takes scrambled words as input.
- Matches scrambled words with a dictionary to find possible unscrambled versions.
- Displays unscrambled words.

## Technologies Used
- HTML, CSS, JavaScript
- Fetch API for data retrieval

## How It Works
1. A word bank is loaded from `words.txt` using the Fetch API.
2. The word bank is processed into a hashmap.
3. Each time a word is added to the hashmap, the letters are ordered alphabetically.
4. The program checks if the ordered word key is already present in the hashmap:
    - If not, it creates a new key-value pair.
    - If yes, the program appends the word to the existing key.
5. Users input a scrambled word.
6. The program orders the user input alphabetically.
7. It validates the ordered input against the keys in the hashmap.
8. If a key is found, all the words with the same spelling are displayed.

## Cloning the repository

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nisSubba2024/unscramble_me.git
   ```

