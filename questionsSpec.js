'use strict';

describe('javascriptRefresher', function(){
  var refresher;

  beforeEach(function(){
    refresher = new Refresher();
  });

  it('selects elements starting with A', function(){
    var result = refresher.selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
    expect(result).toEqual(['apples', 'avocados']);
  });

  it('selects elements starting with a vowel', function(){
    var result = refresher.selectElementsStartingWithVowel(['john', 'david', 'omar', 'fred', 'idris', 'angela']);
    expect(result).toEqual(['omar', 'idris', 'angela']);
  });

  it('removes null values from an array', function(){
    var result = refresher.removeNullElements(['a', 'b', null, null, false, 0]);
    expect(result).toEqual(['a', 'b', false, 0]);
  });

  it('removes null and false values from an array', function(){
    var result = refresher.removeNullAndFalseElements(['a', 'b', null, null, false, 0]);
    expect(result).toEqual(['a', 'b', 0]);
  });

  it('reverses the letters of each element in an array', function(){
    var result = refresher.reverseWordsInArray(['dog', 'monkey', 'elephant', 'kayak']);
    expect(result).toEqual(['god', 'yeknom', 'tnahpele', 'kayak']);
  });

  it('makes every possible pairing of students', function(){
    var result = refresher.everyPossiblePair(['Jon', 'Tyrion', 'Daenerys']);
    expect(result).toEqual([['Jon', 'Tyrion'], ['Daenerys', 'Tyrion'], ['Daenerys', 'Jon']]);
  });

  it('takes all elements except the first 3', function(){
    var result = refresher.allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it('adds an element to the beginning of an array', function(){
    var result = refresher.addElementToBeginning([2, 3, 4, 5], 1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array by the last letter of each word', function(){
    var result = refresher.sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen']);
    expect(result).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
  });

  it('gets the first half of a string', function(){
    var resultOne = refresher.getFirstHalf('dragon');
    var resultTwo = refresher.getFirstHalf('snake');

    expect(resultOne).toEqual('dra');
    expect(resultTwo).toEqual('sna');
  });

  it('makes numbers negative', function(){
    var resultOne = refresher.makeNegative(5);
    var resultTwo = refresher.makeNegative(-5);

    expect(resultOne).toEqual(-5);
    expect(resultTwo).toEqual(5);
  });

  it('counts elements in an array that are palindromes', function(){
    var result = refresher.numberOfPalindromes(['kayak', 'noon', 'khaleesi', 'hodor', 'racecar']);
    expect(result).toEqual(3);
  });

  it('returns the shortest word in an array', function(){
    var result = refresher.shortestWord(['winter', 'is', 'coming']);
    expect(result).toEqual('is');
  });

  it('returns the longest word in an array', function(){
    var result = refresher.longestWord(['A', 'Lannister', 'always', 'pays', 'his', 'debts'])
    expect(result).toEqual('Lannister');
  });

  it('sums up the numbers in an array', function(){
    var result = refresher.sumNumbers([1, 3, 5, 6, 2, 8]);
    expect(result).toEqual(25);
  });

  it('repeats the elements of an array', function(){
    var result = refresher.repeatElements(['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
  });

  it('turns a number string into a number', function(){
    var result = refresher.stringToNumber('3');
    expect(result).toEqual(3);
  });

  it('calculates the average of an array of numbers', function(){
    var result = refresher.calculateAverage([10, 15, 25]);
    expect(result).toEqual(17);
  });

  it('gets elements until greater than five', function(){
    var result = refresher.getElementsUntilGreaterThanFive([1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7]);
    expect(result).toEqual([1, 3, 5, 4, 1, 2]);
  });

  it('converts an array to an object', function(){
    var result = refresher.convertArrayToObject(['Jaime', 'Lannister', 'Robb', 'Stark', 'Joffrey', 'Baratheon']);
    expect(result).toEqual({'Jaime': 'Lannister', 'Robb': 'Stark', 'Joffrey': 'Baratheon'});
  });

  it('gets all letters in an array of words', function(){
    var result = refresher.getAllLetters(['cat', 'dog', 'fish']);
    expect(result).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
  });

  it('swaps keys and values in an object', function(){
    var result = refresher.swapKeysAndValues({'Frodo': 'Baggins', 'Samwise': 'Gamgee', 'Gandalf': 'The Gray'});
    expect(result).toEqual({'Baggins': 'Frodo', 'Gamgee': 'Samwise', 'The Gray': 'Gandalf'});
  });

  it('adds together keys and values', function(){
    var result = refresher.sumKeysAndValues({5: 3, 1: 7});
    expect(result).toEqual(16);
  });

  it('removes capital letters from a string', function(){
    var result = refresher.removeCapitals('Hello Kitty');
    expect(result).toEqual('ello itty');
  });

  it('rounds up a number', function(){
    var result = refresher.roundUp(4.3942);
    expect(result).toEqual(5);
  });

  it('formats a date nicely', function(){
    var result = refresher.formatDateNicely(new Date('2015-03-04'));
    expect(result).toEqual('04/03/2015');
  });

  it('gets the domain name from an email address', function(){
    var result = refresher.getDomainName('spike@makersacademy.com');
    expect(result).toEqual('makersacademy');
  });

  it('titleizes a string', function(){
    var result = refresher.titleize('the lion the witch and the wardrobe');
    expect(result).toEqual('The Lion the Witch and the Wardrobe');
  });

  it('checks a string for special characters', function(){
    var resultOne = refresher.checkForSpecialCharacters('ABCdef123');
    var resultTwo = refresher.checkForSpecialCharacters('ABC@dsklfj!');

    expect(resultOne).toBe(false);
    expect(resultTwo).toBe(true);
  });

  it('finds the square root of a number', function(){
    var resultOne = refresher.squareRoot(9);
    var resultTwo = refresher.squareRoot(3);

    expect(resultOne).toEqual(3.0);
    expect(resultTwo).toEqual(1.7320508075688772);
  });

  it('finds the factorial of a number', function(){
    var result = refresher.factorial(5);
    expect(result).toEqual(120); // = 5 * 4 * 3 * 2 * 1
  });

  it('finds all possible anagrams of a word', function(){
    var result = refresher.findAnagrams('mad');
    expect(result).toEqual(["adm", "amd", "dam", "dma", "mad", "mda"]);
  });

  it('converts Fahrenheit to Celsius rounding to the nearest integer', function(){
    var resultOne = refresher.convertToCelsius(32);
    var resultTwo = refresher.convertToCelsius(55);

    expect(resultOne).toEqual(0);
    expect(resultTwo).toEqual(13);
  });

  it('changes each letter of an array into its position in the alphabet', function(){
    var result = refresher.letterPosition(['H', 'e', 'l', 'l', 'o', 'k', 'i', 't', 't', 'y']);
    expect(result).toEqual([8, 5, 12, 12, 15, 11, 9, 20, 20, 25]);
  });


});
