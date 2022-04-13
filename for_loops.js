// console.log("==== Task 1 ====");
//Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

/* for (let i = 0; i < 5; i++) {
  console.log("Labas");
} */

// console.log("==== Task 2 ====");
//Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

/* for (let i = 0; i < 5; i++) {
  console.log(i); 
} */

// console.log("==== Task 3 ====");
//Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

/* for (let i = 0; i <= 40; i = i + 10) {
  console.log(i);
} */

// console.log("==== Task 4 ====");
//Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

/* for (let i = 49; i <= 53; i++) {
  console.log(i);
} */

// console.log("==== Task 5 ====");
//Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).

/* for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random(i) * 11));
} */

// console.log("==== Task 6 ====");
//Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

/* for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
} */

// console.log("==== Task 7 ====");
//Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

/* let n = 3;
for (let i = 1; i <= 10; i++) {
  d = i * n;
  console.log(d);
} */

// console.log("==== Task 8 ====");
//Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
/* let cm = 2.54;
for (i = 1; i <= 10; i++) {
  coliai = cm * i;
  console.log(i + "col yra " + coliai + "cm"); 
} */

// console.log("==== Task 9 ====");
//Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite
//kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.

/* let indelis = 100;
let palukanos = 2;
let busimosPalukanos = (indelis * palukanos) / 100;
for (n = 1; n < 6; n++) {
  indelis = indelis + busimosPalukanos;
  busimosPalukanos = (indelis * palukanos) / 100;
  console.log(
    n +
      " metais sukaupėte " +
      busimosPalukanos.toFixed(2) +
      " Eur palūkanų, bendra indėlio suma yra " +
      indelis.toFixed(2) +
      " Eur "
  );
} */

//console.log("==== Task 10 ====");
/* Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus. */

/* let m = 2022;
for (let i = 1; i <= m; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) console.log(i);
} */
