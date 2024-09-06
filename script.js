const inputText = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const checkResult = document.getElementById('result');
const clearBtn = document.getElementById('clear');

// Clear input field
function clearField() {
    inputText.value = '';
    checkResult.innerHTML = '';
}

// Alert text for checkBtn
function alertText() {
    if (inputText.value === '') {
        alert('Please input a value');
    }
}

// Check function for one letter
function chekOneLetter() {
    const regex = /^[A-Z]$/i; // Case-insensitive match for a single letter
    if (regex.test(inputText.value)) {
        checkResult.innerHTML = `<span class="spn">${inputText.value}</span> is a palindrome.`;
    } else {
        checkResult.innerHTML = `<span class="spn">${inputText.value}</span> is not a palindrome.`;
    }
}

// Filter text to remove non-alphanumeric characters and convert to lowercase
function filterText(char) {
    return char.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Check if the word is a palindrome or not
function checkWord() {
    let filteredText = filterText(inputText.value);
    let reversedText = filteredText.split('').reverse().join('');
    if (filteredText === reversedText) {
        checkResult.innerHTML = `<span class="spn">${inputText.value}</span> is a palindrome.`;
    } else {
        checkResult.innerHTML = `<span class="spn">${inputText.value}</span> is not a palindrome.`;
    }
}

clearBtn.addEventListener('click', clearField);
checkBtn.addEventListener('click', alertText);
checkBtn.addEventListener('click', chekOneLetter);
checkBtn.addEventListener('click', checkWord);
