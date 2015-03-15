
var selectElementsStartingWithA = function(array) {
    function startingWithA(word) {
        // use .charAt(0) instead of just [0] to be more explicit
        return word.charAt(0) === 'a';
    }
    return array.filter(startingWithA);
};

var selectElementsStartingWithVowel = function(array) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    function startingWithVowel(word) {
        var firstChar = word.charAt(0);
        // if firstChar not in list, then index === -1
        return vowels.indexOf(firstChar) !== -1;
    }
    return array.filter(startingWithVowel);
};

var removeNullElements = function(array) {
    function notNull(word) {
        return word !== null;
    }
    return array.filter(notNull);
};

var removeNullAndFalseElements = function(array) {
    function notNullOrFalse(word) {
        return word !== null && word !== false;
    }
    return array.filter(notNullOrFalse);
};

var reverseWordsInArray = function(array) {
    function reverseChars(word) {
        return word.split("").reverse().join("");
    }
    return array.map(reverseChars);
};

var everyPossiblePair = function(array) {
    var everyPossiblePair = [];
    // note: slice(0) creates deep copy of array
    // reverse() mainpulates AND saves in place AND returns
    var copyOfArray = array.slice().reverse();
    for (var student1 of array) {
        copyOfArray.pop();
        for (var student2 of copyOfArray) {
            everyPossiblePair.push([student1, student2].sort());
        }
    }
    return everyPossiblePair.sort();
};

var allElementsExceptFirstThree = function(array) {
    return array.slice(3);
};

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
};

var sortByLastLetter = function(array) {
    function compareLastLetter(word1, word2) {
        return word1.slice(-1) > word2.slice(-1);
    }
    return array.sort(compareLastLetter);
};

var getFirstHalf = function(string) {
    return string.slice(0, (string.length + 1) / 2);
};

var makeNegative = function(number) {
    return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
    // recursive function to test if an array of letters is palindrome
    function isPalindrome(wordArray) {
        if (wordArray.length < 2) {
            return true;
        }
        var first = wordArray.shift();
        var last = wordArray.pop();
        if (first !== last) {
            return false;
        } else {
            return isPalindrome(wordArray);
        }
    }
    function incrementIfPalindrome(count, word) {
        var wordArray = word.split("");
        return isPalindrome(wordArray) ? count + 1 : count;
    }
    return array.reduce(incrementIfPalindrome, 0);
};

var shortestWord = function(array) {
    function returnMin(previousMin, word) {
        return previousMin.length < word.length ? previousMin : word;
    }
    return array.reduce(returnMin);
};

var longestWord = function(array) {
    function returnMax(previousMax, word) {
        return previousMax.length > word.length ? previousMax : word;
    }
    return array.reduce(returnMax);
};

// also using this as a helper for other functions
// made it function instead of var because of this
// just in case
function sumNumbers(arrayOfNumbers) {
    function sumNumber(prevSum, number) {
        return prevSum + number;
    }
    return arrayOfNumbers.reduce(sumNumber, 0);
}

var repeatElements = function(array) {
    // concat does not affect array, and creates whole new array
    return array.concat(array);
};

var stringToNumber = function(string) {
    return Number(string);
};

var calculateAverage = function(array) {
    // javascript doesn't do integer division!
    return sumNumbers(array) / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
    // generator function. only in ES6 / js 1.7 or higher
    function* getGenerator(array) {
        for (var number of array) {
            if (number > 5) break;
            yield number;
        }
    }
    return [number for (number of getGenerator(array))];
    // below is a cool list comprehension
    // but it doesn't work because it is just a filter
    // return [number for (number of array) if (number > 5)];
};

var convertArrayToObject = function(array) {
    var newObject = {};
    if (array.length % 2) throw "array has odd number of elements";
    for (i = 0; i < array.length; i += 2) {
        newObject[array[i]] = array[i + 1];
    }
    return newObject;
};

var getAllLetters = function(array) {
    function addIfUnique(letters, newLetter) {
        if (letters.indexOf(newLetter) === -1) letters.push(newLetter);
        return letters;
    }
    return array.join("").split("").sort().reduce(addIfUnique, []);
};

var swapKeysAndValues = function(object) {
    var newObject = {};
    for (var key in object) {
        newObject[object[key]] = key;
    }
    return newObject;
};

var sumKeysAndValues = function(object) {
    return sumNumbers([Number(key) + Number(object[key]) for (key in object)]);
};

var removeCapitals = function(string) {
    function isNotCapital(character) {
        var charCode = character.charCodeAt(0);
        return (charCode > 64 && charCode < 91) ? false : true;
    }
    return string.split("").filter(isNotCapital).join("");
};

var roundUp = function(number) {
    return Math.ceil(number);
};

var formatDateNicely = function(date) {
    // wow... don't know why there isn't a better way
    function padZeros(number, width) {
        var numberString = String(number);
        var zeros = [];
        for (var i = 0; i < width - numberString.length; i ++) {
            zeros.push('0');
        }
        return zeros.join("") + numberString;
    }

    var day = padZeros(date.getDate(), 2);
    // because months go from 0 to 11...
    var month = padZeros(date.getMonth() + 1, 2);
    var year = date.getFullYear();
    return  day + '/' +  month + '/' + year;
};

var getDomainName = function(string) {
    var domainPattern = /^.+@(.+)\..+$/;
    return string.match(domainPattern)[1];
};

var titleize = function(string) {
    var insignificantWords = ["the", "and"];
    function titleizeWord(word, insignificantWords) {
        if (insignificantWords.indexOf(word) !== -1) return word;
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    var titleizedArray = [];
    var firstWordOfSentence = true;
    for (var word of string.split(" ")) {
        if (firstWordOfSentence) {
            titleizedArray.push(titleizeWord(word, []));
            firstWordOfSentence = false;
        } else {
            titleizedArray.push(titleizeWord(word, insignificantWords));
        }
        if (word.slice(-1) === '.') firstWordOfSentence = true;
    }
    return titleizedArray.join(" ");
};

var checkForSpecialCharacters = function(string) {
    function isNormal(currentCharacter) {
        var charCode = currentCharacter.charCodeAt(0);
        return (charCode < 48 || charCode > 122) ? false : true;
    }
    return !(string.split("").every(isNormal));
};

var squareRoot = function(number) {
    return Math.sqrt(number);
};

var factorial = function(number) {
    function factorial(number) {
        if (number < 1 || number !== parseInt(number)) {
            throw "wtf?";
        } else if (number === 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }
    return factorial(number);
};

var findAnagrams = function(string) {

    function permute(array) {
        if (array.length === 1) return [array];
        var fullPermutations = [];
        for (var i in array) {
            var subset = array.slice(0);
            subset.splice(i, 1);
            for (var permutation of permute(subset)) {
                permutation.unshift(array[i]);  // would be faster to push
                fullPermutations.push(permutation);
            }
        }
        return fullPermutations;
    }
    function joinLetters(array) {
        return array.join("");
    }
    return permute(string.split("")).map(joinLetters);
};

var convertToCelsius = function(number) {
    return Math.round((number - 32) / 1.8);
};

var letterPosition = function(array) {
    function convertToPosition(character) {
        return character.toLowerCase().charCodeAt(0) - 96;
    }
    return array.map(convertToPosition);
};
