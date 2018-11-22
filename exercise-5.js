// 1. Let's Form a Sentence


console.log ('program start from here--');

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log (word , second , third , fourth , fifth , sixth , seventh);

// 2. Index Accesing -1 by 1

console.log ('program start from here --');

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord =  word[11];
var thirdWord = word[0] + word[5] + word[11] + word[13];
var fourthWord = word[6] + word[1] + word[10];
var fifthWord = word[13] + word[11] + word[8];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// 3. Breaking sentence (Again) Using Substring

console.log ('program start from here--')

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15,17);
var fourthWord3 = word3.substring(18,20);
var fifthWord3 = word3.substring(21,25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// 4. Breaking Sentence (yet Again) and Count Each Length

console.log ('program start from here--')

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word.substring(4, 14);
var thirdWord4 = word.substring(15,17);
var fourthWord4 = word.substring(18,20);
var fifthWord4 = word.substring(21,25);

var firstWord4Length = exampleFirstWord4.length;
var secondWord4Length = secondWord4.length;
var thirdWord4Length = thirdWord4.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length =  fifthWord4.length; 

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + fifthWord+ ', with length: ' + fifthWord4Length);

