/* console.log("==== Task 1 ====");
//Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100. */
//kartais meta daugiau už 100 ??

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let sum = 0;
while (sum < 100) {
  sum = sum + rand(1, 10);
  console.log(sum);
} */

/* console.log("==== Task 2 ====");
//Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7. */
/* let number = 0;
do {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  number = number + randomNumber;
  console.log(randomNumber);
} while (number % 7); */

console.log("==== Task 3 ==== ?????");
/*Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m
skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
Kontroliniai duomenys:
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų). Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).*/
/* let skyriai = 8;
let d;
let skyriaiPerDiena = d + 1;
d++;
let avg;
while () */

/* console.log("==== Task 4 ====");
// Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5. */
/*
do {
  random = Math.floor(Math.random() * 11);
  console.log(random);
} while (random !== 5); */

// arba

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let n;
while (n !== 5) {
  n = rand(1, 10);
  console.log(n);
} */

/* console.log("==== Task 5 ====");
// Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko. */
/* let random = 0;
let numbers = [];
do {
  random = Math.floor(Math.random() * 11);
  console.log(random);
  numbers.push(random);
} while (random !== 7 && random !== 5);
console.log("Ciklų skaičius:" + " " + numbers.length); */
