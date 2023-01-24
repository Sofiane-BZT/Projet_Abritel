// let urlApi = "https://simplon-brief-htmlcssjs.vercel.app";
// let heroTitle = document.querySelector("#destination_information_title");
// let heroImg = document.querySelector("#heroImage");

// async function getHeroTitle() {
//   let result = await fetch(
//     "https://simplon-brief-htmlcssjs.vercel.app/api/hero"
//   );
//   let data = await result.json();
//   heroTitle.innerHTML = data.h1;
//   heroImg.setAttribute("src", urlApi + "/" + data.img);
//   console.log(heroImg.setAttribute);
// }

// window.addEventListener("load", async (event) => {
//   await getHeroTitle();
// });

// ------------------------------LISTE VILLES API----------------------------

async function getCitys() {
  let cityDataList = document.getElementById("citys");
  try {
    const responseJSON = await fetch(
      "https://simplon-brief-htmlcssjs.vercel.app/api/destination"
    );

    const responseJS = await responseJSON.json();
    console.log(responseJS, "objets javascipt");
    for (const iterator of responseJS) {
      let cityElementOption = document.createElement("option");

      cityElementOption.textContent = iterator;

      cityDataList.appendChild(cityElementOption);
    }
  } catch (error) {
    console.log(error, "erreur");
  }
}
window.addEventListener("load", getCitys);

// --------------------------------CHOIX NOMBRE DE VACANCIERS---------------------

let button_vacationers = document.querySelector(".button_vacationers");
let list = document.querySelector(".list");
button_vacationers.addEventListener("click", () => {
  list.classList.toggle("newlist");
});

const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
const value = document.querySelector(".value");

let totalValue = 0;
value.innerHTML = totalValue + " " + "vacanciers";

add.addEventListener("click", () => {
  totalValue++;
  value.innerHTML = totalValue + " " + "vacanciers";
});

sub.addEventListener("click", () => {
  totalValue--;
  value.innerHTML = totalValue + " " + "vacanciers";
});
