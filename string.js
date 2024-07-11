/* ---------------------------------- */
/*              STRINGLER             */
/* ---------------------------------- */

const str1 = "Clarusway-CH17";
const str2 = `Hello`;

console.log(typeof str1);

const str3 = new String("World");

console.log(typeof str3);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

const str4 = "🐱‍👤";
console.log(str4);

/* ---------------------------------- */
/*     STRING YAPISI VE INDEXLEME     */
/* ---------------------------------- */

let kelime = "Clarusway";

console.log(kelime[0]);
console.log(kelime[3]);
console.log(kelime[5]);
console.log(kelime[7]);
console.log(kelime[9]);

for (let i = 0; i < 9; i++) {
  console.log(kelime[i]);
}

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
// parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* ---------------------------------- */
/*           length-property          */
/* ---------------------------------- */

const metin = "Clarusway";

console.log(metin.length);

for (let i = 0; i <= metin.length - 1; i++) {
  console.log(metin[i]);
}

//! ************STRING METHODS ************
// String metodları () kullanılır.
// Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

console.log(metin.toUpperCase());
console.log(metin);

let yeniMetin = metin.toUpperCase();
console.log(yeniMetin);

console.log(metin.toLowerCase);
let yeniMetin1 = metin.toLowerCase();
console.log(yeniMetin);

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + "" + text2);

let text = "Merhaba";
text += "Clarusway";
console.log(text);

/* ---------------------------------- */
/*              concat()              */
/* ---------------------------------- */

const s1 = "Mola Saati";
const s2 = " yaklaşıyor ☕";

const newStr = s1.concat(s2);
console.log(newStr);

/* ---------------------------------- */
/*          Template Literals         */
/* ---------------------------------- */
let str5 = "Merhaba";
let str6 = "Dünya";

console.log("Merhaba");
console.log("Dünya");

console.log(`${str5} Clarusway,
    
    ${str5}
    
    ${str6} `);

const yeniDeger = `${str5} Clarusway,
    
    ${str5}
    
    ${str6} `;

console.log(yeniDeger.length);

/* ---------------------------------- */
/*               split()              */
/* ---------------------------------- */
// /* ------ str1.split(saparator) ----- */
console.clear();
let metin1 = "Clarusway IT Bootcamp";

console.log(metin1.split(" "));
console.log(metin1);
let parcalanmismetin=metin1.split(" ")

console.log(parcalanmismetin[2]);

for(let i=0; i<parcalanmismetin.length;i++){
    if (parcalanmismetin[i]==="IT"){
        console.log("bu cümlede IT kelimesi geçiyor");
    }
}

console.log(metin1.split(""));

let date="10.07.2024"
let newDate=date.split(".");

let gun=newDate[0]
console.log(gun);

let months="jan /feb /mar /apr /may /jun /jul /aug /sep /oct /nov /dec"

let newMonth=months.split("/");

/* ---------------------------------- */
/*             join metodu            */
/* ---------------------------------- */

console.log(newMonth.join("-"));


let kelime1="Merhaba"

console.log(kelime1.split("").reverse().join());

/* ------------ Polidrom ------------ */

let kelime2="madam"
const mesaj=kelime2.split("").reverse().join("")? "Polindromudur" : "polindrom değildir"

console.log(mesaj);

/* ---------------------------------- */
/*                SLİCE               */
/* ---------------------------------- */
let sentence="Merhaba Cohort 17"
console.log(sentence.slice(8,14));
console.log(sentence.slice(8))



console.log(sentence.slice(-3))
console.log(sentence.slice(-9,-3))


/* ------------ substring ----------- */

console.log(sentence.substring(12,17));


/* ------------- substr ------------- */

console.log(sentence.substr(8,5));

/* ------------ includes ------------ */

const kelime4="to be or not To be, 5 that is The 4 questions."

console.log(kelime4.includes("to be"));

let url="https://clarusway.com/"

let msj=url.includes("https")? "Bu site güvenlidir" : "Güvenli değildir"
console.log(msj);


/* ------------- indexog ------------ */

console.log(kelime4.indexOf("be"));
console.log(kelime4.lastIndexOf("be"));

/* ------------- search ------------- */

console.log(kelime4.search("is"));

/* ---- REGEX- regular expression --- */
let variable="KüçÜk"
console.log(variable.search(/ç/i));



console.log(variable.search(/[a-z]/));
console.log(variable.search(/[A-Z]/));
console.log(kelime4.search(/[0-9]/));
console.log(kelime4.search(/[.]/));

/* -------------- match ------------- */

let phone ="My phone number is 123-456-1234"

let result=phone.match(/d\+/g)

console.log(result);