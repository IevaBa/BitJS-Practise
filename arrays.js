//console.log("==== Task 1 ====");
//Sukurti masyą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.

/* let arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}
console.log(arr); */

//console.log("==== Task 2 ====");
//Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų atsitiktiniai skaičiai nuo 1 iki masyvo ilgio.

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let arr = [];
let arrLength = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
for (let i = 0; i < arrLength; i++) {
  arr.push(rand(1, arrLength));
}
console.log(arr); */

//console.log("==== Task 3 ====");
// Sukurti atsitiktinio ilgio masyvą, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);}
let arr = [];
for (let i = 0; i < rand(10, 15); i++) { arr.push(rand(5, 47)); }
console.log(arr);

let max = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]; } }

console.log("Didžiausias skaičius masyve yra " + max); */

//console.log("==== Task 4 ====");
// Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20.

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);}

let arr = [];
let raides = ["D","E","F","G","H. 20"];
for (i=0; i<100; i++) {
  arr.push(raides[rand(0,4)]);
}
console.log(arr) */

//console.log("==== Task 5 ====");
// Sukurti masyvą, kurio ilgis 100, o reikšmės - atsitiktinės raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let raides = ["M", "N", "O", "P"];
let arr = [];
for (i = 0; i < 100; i++) {
  arr.push(raides[rand(0, 3)]);
}
console.log(arr);

let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] === "M") {
    countM++;
  }
  if (arr[i] === "N") {
    countN++;
  }
  if (arr[i] === "O") {
    countO++;
  }
  if (arr[i] === "P") {
    countP++;
  }
}
console.log(countM);
console.log(countN);
console.log(countO);
console.log(countP);
let max = [countM, countN, countO, countP];

if (Math.max(...max) === countM) {
  console.log("Daugiausia yra raidžių M: " + countM);
}
if (Math.max(...max) === countN) {
  console.log("Daugiausia yra raidžių N: " + countN);
}
if (Math.max(...max) === countO) {
  console.log("Daugiausia yra raidžių O: " + countO);
}
if (Math.max(...max) === countP) {
  console.log("Daugiausia yra raidžių P: " + countP);
} */

//console.log("==== Task 6 ====");
// Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.

/* let n = 20;
let arr = [];
do {
  let randomNumber = Math.floor(Math.random() * 41) + 10;
  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber);
  }
} while (arr.length < n);
console.log(arr); */
