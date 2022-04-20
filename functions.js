// console.log("==== Task 1 ====");
//Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
/*
function add(a, b) {
  return a + b;
}
console.log(add(2, 9)); */

//console.log("==== Task 2 ====");
//Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina
//rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

/* function findHigher(a, b) {
  if (a > b) {
    return "Pirmas skaičius yra didesnis";
  } else if (a < b) {
    return "Antras skaičius yra didesnis";
  } else {
    return "Skaičiai yra lygūs";
  }
}
console.log(findHigher(5, 3)); */

//console.log("==== Task 3 ====");
//Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai
//yra keliemieji.

/* function keliamiejiMetai(metai) {
  if ((metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0) {
    return "Metai yra keliamieji";
  } else {
    return "Metai nėra keliamieji";
  }
}
console.log(keliamiejiMetai(1600)); */

//console.log("==== Task 4 ====");
//Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.

/* let n = 5;
function skaiciausKvadratas(number) {
  return number * number;
}
console.log("Skaičiaus " + n + " kvadratas yra " + skaiciausKvadratas(n)); */

//console.log("==== Task 5 ====");
//Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.

/* function totalSum(number) {
  if (number >= 1) {
    return number + totalSum(number - 1);
  } else {
    return 0;
  }
}
console.log(totalSum(5)); */
///////////////////////////////////////////////////////////////////////////////

//console.log("==== Task 6 ====");
//Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

/* let n = 8;
let count = 0;

function myFunction(number) {
  for (i = number - 1; i > 1; i--)
    if (number % i === 0) {
      count++;
    }
  console.log(count);
}
myFunction(n); */

//console.log("==== Task 7 ====");
//Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).

/* function tekstas(a) {
  if (typeof a !== "string") {
    return "This is not a String";
  } else {
    return a + " : teksto ilgis - " + a.length;
  }
}
console.log(tekstas("Kaip jums sekasi?")); */

//console.log("==== Task 8 ====");
//Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".

/* function telefonoNumeris(a) {
  if (!Array.isArray(a)) {
    return "Kintamasis nėra masyvas";
  } else if (a.length !== 10) {
    return "Kintamasis yra netinkamo ilgio";
  }
  for (let i = 0; i < 10; i++) {
    if (typeof a[i] !== "number") {
      return "Masyvos reikšmės turi būti skaičiai";
    }
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}
console.log(telefonoNumeris(15));
console.log(telefonoNumeris([2, 3, 4, 3]));
console.log(telefonoNumeris([2, 2, 4, 5, 6, 6, 5, 4, 3, 3]));
console.log(telefonoNumeris(["hi", 2, 4, 5, 6, 6, 5, 4, 3, 3])); */

//console.log("==== Task 9 ====");
//Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.

/* function tekstas(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return "Kintamasis nėra tekstas";
  }
  if (a.length > b.length) {
    return "Tekstas a yra ilgesnis";
  }
  if (b.length > a.length) {
    return "Tekstas b yra ilgesnis";
  } else {
    return "Kintamieji yra lygūs";
  }
}
console.log(tekstas("la", "labas")); */

//console.log("==== Task 10 ====");
//Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.

/* let count = 0;
function tekstas(a) {
  if (typeof a !== "string") {
    return "Kintamasis nėra tekstas";
  }
  for (i = 0; i < a.length; i++)
    if (a[i] === "a" || a[i] === "A") {
      count++;
    }
  return "Tekste yra " + count + " a ";
}

console.log(tekstas("laba dienA")); */
