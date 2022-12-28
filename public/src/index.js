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
  /*
  if (window.location.href.endsWith("#")) {
    window.location.href = window.location.href.slice(0, window.location.href.length - 1);
  }
  */
  window.location.href = `${window.location.href}choosed?performer=${randomPerformer}`;
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
      window.location.href = `${window.location.href}choosed?performer=${characters[i].short_name}`;
    });
  }
}

loadData();
document.getElementById("myfooter").classList.remove("fixed-bottom");

/**
 * Change the theme
 */
function darkTheme() {
  let dark = document.getElementById("theme");
  let logo = document.getElementById("logo");

  const head = document.getElementsByTagName("head")[0];
  let link = document.createElement("link");

  if (dark.innerHTML === "Light theme") {
    link.rel = "stylesheet";
    link.href = "/css/light.css";
    logo.setAttribute("src", "/logos/logo_dark.ico");
    dark.innerHTML = "Dark theme";
  } else {
    link.rel = "stylesheet";
    link.href = "/css/dark.css";
    logo.setAttribute("src", "/logos/logo_light.ico");
    dark.innerHTML = "Light theme";
  }
  head.appendChild(link);
}
