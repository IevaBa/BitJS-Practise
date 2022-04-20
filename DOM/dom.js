// 1 ATSKIRI ELEMENTAI
// a. Tamsiai žaliai nuspalvinti h1 tagą;

let colorGreen = document.getElementsByTagName("h1");
colorGreen[0].style.color = "darkgreen";

// b. Tagui i pridėti klasę small;
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

let i = document.getElementsByTagName("i");
i.className = "small";

// c. Iš tago h1 pašalinti klasę main;

let element = document.getElementsByTagName("h1")[0];
element.classList.remove("main");

// d. Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove

let first = document.getElementsByTagName("h2")[0];
first.className = "first";
first.classList.remove("main");

// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

let span = document.getElementsByTagName("span")[0];
span.style.fontSize = "10px";
span.style.color = "grey";

// 2. ELEMENTŲ GRUPĖS (NODE LIST) SKAIČIAVIMUS IŠVESTI Į CONSOLĘ
// a. Suskaičiuoti kiek yra h2 tagų;

let h2 = document.querySelectorAll("h2");
console.log(h2.length);

// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
//?????

if (h2 === first) {
  h2.length = h2.length - first.length;
}
console.log(h2.length);

// c. Visus h2 tagus nuspalvinti šviesiai mėlynai

for (let i = 0; i < h2.length; i++) {
  h2[i].style.color = "lightblue";
}
console.log(h2);

// d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

let priceTag = document.querySelector(".prices").children;
for (let i = 0; i < priceTag.length; i++) {
  priceTag[i].className = "price-tag";
}
console.log(priceTag);

// e. Pabraukti visus tagus su klase new;

let classNew = document.querySelectorAll(".new");
classNew.style.textDecoration = "underline";

// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
