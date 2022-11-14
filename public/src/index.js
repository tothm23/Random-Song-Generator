/*
const mycard = document.getElementsByClassName("mycard");
for (let i = 0; i < mycard.length; i++) {
  mycard[i].addEventListener("click", (event) => {
    alert(mycard[i].innerText);
  });
}
*/

/**
 * Read the JSON file
 * @param {*} file
 * @param {*} callback
 */
function readJSON(file, callback) {
  const raw = new XMLHttpRequest();
  raw.open("GET", file);
  raw.onload = () => {
    callback(raw.responseText);
  };
  raw.send();
}

/**
 * Remove myrow element
 */
function removeMyrow() {
  try {
    const myrow = document.getElementById("myrow");
    myrow.remove();
  } catch (error) {
    console.log("This element was removed!");
  }
}

/**
 * return a random number
 * @param {*} max
 * @returns
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

/**
 * choose random performer
 */
/*
function getRandomPerformer() {
  removeMyrow();

  let randomFullname = "";
  readJSON("../data.json", (text) => {
    const data = JSON.parse(text);
    randomFullname = data[getRandomNumber(data.length)].full_name;

    const mycontainer = document.getElementById("mycontainer");
    const section = document.createElement("section");
    section.setAttribute("class", "row mt-3 mb-5");
    
    mycontainer.append(section);

    const cardbase = document.createElement("div");
    cardbase.setAttribute("class", "col-xl-12 col-md-12 mt-4 card-base");

    let card = document.createElement("div");
    card.setAttribute("class", "card mycard text-center justify-content-center");

    let h2 = document.createElement("h2");
    h2.innerHTML = randomFullname;

    section.append(cardbase);
    cardbase.append(card);
    card.append(h2);
  });
}
*/

function getRandomPerformer() {
  window.location.href = "http://127.0.0.1:8080/random";
}

/**
 * performs the search
 */

function search() {
  // the searched value
  const searched = document.getElementById("search-bar").value.toLowerCase();

  // the searched performers
  let searchedPerfomers = [];

  // if there is match
  data.forEach((element) => {
    if (element.full_name.toLowerCase().startsWith(searched)) {
      searchedPerfomers.push(element);
    }
  });

  displayCharacters(searchedPerfomers);
}

let data = [];

// Fetch API  https://www.w3schools.com/jsref/api_fetch.asp
async function loadData() {
  const res = await fetch("../data.json");
  data = await res.json();
  displayCharacters(data);
}

function displayCharacters(characters) {
  let txt = "";
  for (let i = 0; i < characters.length; i++) {
    txt +=
      `
    <div class="col-xl-4 col-md-6 mt-4 card-base">
      <div class="card mycard text-center justify-content-center">
      <h2 class="performer">` + characters[i].full_name + `</h2>
        <img src="img/avatars/` +
      characters[i].short_name +
      `.jpg" class="rounded-circle avatar mx-auto">
      </div>
    </div>
    `;
  }
  document.getElementById("myrow").innerHTML = txt;
}

loadData();
