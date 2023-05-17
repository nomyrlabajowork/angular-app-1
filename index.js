"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchData = exports.displayRecords = exports.addPlace = void 0;
localStorage.setItem('Statistics', JSON.stringify([]));
let placeData = JSON.parse(localStorage.getItem('placeData') || '[]');
const addPlace = (city, country, population) => {
    placeData.push({ city, country, population });
    localStorage.setItem('placeData', JSON.stringify(placeData));
    (0, exports.displayRecords)();
};
exports.addPlace = addPlace;
const displayRecords = () => {
    let statsList = document.getElementById('statsList');
    if (statsList) {
        while (statsList.hasChildNodes() && statsList.firstChild) {
            statsList.removeChild(statsList.firstChild);
        }
    }
    placeData.forEach((element) => {
        let li = document.createElement('li');
        li.innerText = `${element.city}, ${element.country}, ${element.population}`;
        if (statsList) {
            statsList.appendChild(li);
        }
    });
};
exports.displayRecords = displayRecords;
// for searching record
const searchData = (record) => {
    const results = placeData.filter((information) => {
        return (information.city.includes(record) || information.country.includes(record));
    });
    let statsList = document.getElementById('statsList');
    if (statsList) {
        while (statsList.hasChildNodes() && statsList.firstChild) {
            statsList.removeChild(statsList.firstChild);
        }
    }
    results.forEach((element) => {
        let li = document.createElement('li');
        li.innerText = `${element.city}, ${element.country}, ${element.population}`;
        if (statsList) {
            statsList.appendChild(li);
        }
    });
};
exports.searchData = searchData;
// item 2
console.log('Item 2');
function isValidISBN10(isbn) {
    const cleanedISBN = isbn.replace(/\D/g, '');
    if (cleanedISBN.length !== 10) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        const digit = parseInt(cleanedISBN[i]);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * (i + 1);
    }
    const lastCharacter = cleanedISBN[9];
    if (lastCharacter == 'X') {
        sum += 10 * 10;
    }
    else {
        const digit = parseInt(lastCharacter);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * 10;
    }
    return sum % 11 == 0;
}
console.log(isValidISBN10('111222382'));
console.log(isValidISBN10('048665088X'));
console.log(isValidISBN10('1112223339X'));
// item 3
console.log('Item 3');
function convertFunc(word) {
    const v = ['a', 'e', 'i', 'o', 'u'];
    let res = '';
    for (let i = 0; i < word.length; i++) {
        let binCode = word[i].charCodeAt(0);
        if (binCode == 90) {
            res += 'A';
            let i = 0;
            while (i < word.length) {
                const character = word[i];
                if (v.includes(character.toLowerCase())) {
                    res += character.toUpperCase();
                }
                else {
                    res += character;
                }
                i++;
            }
            return res;
        }
        else if (binCode == 122) {
            res += 'a';
            let i = 0;
            while (i < word.length) {
                const character = word[i];
                if (v.includes(character.toLowerCase())) {
                    res += character.toUpperCase();
                }
                else {
                    res += character;
                }
                i++;
            }
            return res;
        }
        else {
            res += String.fromCharCode(binCode + 1);
        }
    }
}
console.log(convertFunc('\nNomyrJulz'));
// item 4
console.log('Item 4');
function function4(series) {
    let zero = [];
    let notZero = [];
    let i = 0;
    while (i < series.length) {
        if (series[i] == 0) {
            zero.push(0);
        }
        else {
            notZero.push(series[i]);
        }
        i++;
    }
    return [...notZero, ...zero];
}
console.log(function4([true, 0, 1, 0, 3, 6]));
