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
 * return a random number
 * @param {*} max
 * @returns
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Choose a random performer
 */
function getRandomPerformer() {
  const randomPerformer = data[getRandomNumber(data.length)].short_name;
  //window.location.href = `https://randomsonggenerator.herokuapp.com/choosed?performer=${randomPerformer}`;
  window.location.href = `http://127.0.0.1:8080/choosed?performer=${randomPerformer}`;
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
      <h2 class="performer">` +
      characters[i].full_name +
      `</h2>
        <img src="img/avatars/` +
      characters[i].short_name +
      `.jpg" class="rounded-circle avatar mx-auto">
      </div>
    </div>
    `;
  }
  document.getElementById("myrow").innerHTML = txt;

  const mycard = document.getElementsByClassName("mycard");
  for (let i = 0; i < mycard.length; i++) {
    mycard[i].addEventListener("click", () => {
      //window.location.href = `https://randomsonggenerator.herokuapp.com/choosed?performer=${characters[i].short_name}`;
      window.location.href = `http://127.0.0.1:8080/choosed?performer=${characters[i].short_name}`;
    });
  }
}

loadData();
document.getElementById("myfooter").classList.remove("fixed-bottom");
