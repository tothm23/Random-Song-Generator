/**
 *  @author Tóth Milán
 */

/**
 * Amikor betöltődik a képernyő
 */
window.onload = () => {
  displaySearchBase(false);
  displayBoxes(false);
  displayMainTexts(true);
  displaySongBaseElements(false);
  setTimeout(showLoad, 2000);
};

/**
 * Elrejti a keresőmezőt
 */
function displaySearchBase(hide) {
  const searchbase = document.getElementById("search-base");
  hide ? (searchbase.style.display = "flex") : (searchbase.style.display = "none");
}

/**
 * Elrejti az előadók nevét
 */
function displayBoxes(hide) {
  let boxes = document.getElementById("boxes");
  hide ? (boxes.style.display = "flex") : (boxes.style.display = "none");
}

/**
 * Elrejti az első megjelenő szövegeket
 */
function displayMainTexts(hide) {
  let author = document.getElementById("author");
  let rsg = document.getElementById("rsg");

  hide ? ((author.style = "display:flex"), (rsg.style = "display:flex")) : ((author.style = "display:none"), (rsg.style = "display:none"));
}

/**
 *  Megjeleníti a zenefelületet és a háteret
 */
function displaySongBaseElements(display) {
  let songbase = document.getElementById("songbase");

  display ? ((songbase.style.display = "flex"), (document.getElementById("base").style = "background-image: url('./bg.jpg')")) : (songbase.style.display = "none");
}

/**
 * Betölti az elemeket az előadók neveivel
 */
function showLoad() {
  document.getElementById("loading").style = "display:none";

  displaySearchBase(true);
  displayBoxes(true);
  displayMainTexts(false);
  playAnimation(true);
}

/**
 * Elvégzi a keresést és az összes lehetséges találatot megjeleníti
 * @param {*} input
 */
function searchPerformer(input) {
  const performers = ["against", "alan", "alexandra", "armin", "black", "blasterjaxx", "bodybangers", "david", "deorro", "dimitri", "eminem", "fit", "headhunterz", "icon", "imagine", "inna", "katy", "marshmello", "neffex", "otilia", "panda", "r3hab", "sean", "skrillex", "steve", "timmy", "tujamo", "violet"];

  let txt = "";
  for (let i = 0; i < performers.length; i++) {
    if (performers[i].startsWith(input.toLocaleLowerCase()) || performers[i].startsWith(input.toLocaleUpperCase())) {
      txt += performers[i] + "<br>";
    }
  }

  for (let i = 0; i < performers.length; i++) {
    if (txt.includes(performers[i])) {
      document.getElementById(performers[i]).style.display = "flex";
    } else {
      document.getElementById(performers[i]).style.display = "none";
    }
  }
}

/**
 * Véletlenszerűen választ előadót
 */
function getRandomPerformer() {
  const performers = [
    ["against", "Against The Current"],
    ["alan", "Alan Walker"],
    ["alexandra", "Alexandra Stan"],
    ["armin", "Armin van Buuren"],
    ["black", "Black Veil Brides"],
    ["blasterjaxx", "Blasterjaxx"],
    ["bodybangers", "Bodybangers"],
    ["david", "David Guetta"],
    ["deorro", "Deorro"],
    ["dimitri", "Dimitri Vegas"],
    ["eminem", "Eminem"],
    ["fit", "Fit for Rivals"],
    ["headhunterz", "Headhunterz"],
    ["icon", "Icon for Hire"],
    ["imagine", "Imagine Dragons"],
    ["inna", "Inna"],
    ["katy", "Katy Perry"],
    ["marshmello", "Marshmello"],
    ["neffex", "Neffex"],
    ["otilia", "Otilia"],
    ["panda", "Panda Eyes"],
    ["r3hab", "R3HAB"],
    ["sean", "Sean Paul"],
    ["skrillex", "Skrillex"],
    ["steve", "Steve Aoki"],
    ["timmy", "Timmy Trumpet"],
    ["tujamo", "Tujamo"],
    ["violet", "Violet Orlandi"],
  ];

  let random = getRandomNumber(performers.length);
  chooseSong(performers[random][0], performers[random][1]);
}

/**
 *  Beolvassa a JSON fájlt (AJAX segítségével)
 * @param {*} fájl
 * @param {*} visszahvás
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
 * Generál egy véletlenszerű számot a zenék mennyisége szerint
 * @param max
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Zenét választ
 * @param {*} performer
 */
function chooseSong(performer, perfomername) {
  displayBoxes(false);
  displaySongBaseElements(true);
  displaySearchBase(false);

  readJSON("./data.json", (text) => {
    const data = JSON.parse(text);
    //alert(data.imagine.length);
    //alert(data.imagine[0][0]);

    switch (performer) {
      case "against":
        let againstRandom = getRandomNumber(data.against.length);
        setData(data.against[againstRandom][0], data.against[againstRandom][1]);
        break;

      case "alexandra":
        let alexandraRandom = getRandomNumber(data.alexandra.length);
        setData(data.alexandra[alexandraRandom][0], data.alexandra[alexandraRandom][1]);
        break;

      case "armin":
        let arminRandom = getRandomNumber(data.armin.length);
        setData(data.armin[arminRandom][0], data.armin[arminRandom][1]);
        break;

      case "imagine":
        let imagineRandom = getRandomNumber(data.imagine.length);
        setData(data.imagine[imagineRandom][0], data.imagine[imagineRandom][1]);
        break;

      case "neffex":
        let neffexRandom = getRandomNumber(data.neffex.length);
        setData(data.neffex[neffexRandom][0], data.neffex[neffexRandom][1]);
        break;

      case "steve":
        let steveRandom = getRandomNumber(data.steve.length);
        setData(data.steve[steveRandom][0], data.steve[steveRandom][1]);
        break;

      case "violet":
        let violetRandom = getRandomNumber(data.violet.length);
        setData(data.violet[violetRandom][0], data.violet[violetRandom][1]);
        break;

      case "alan":
        let alanRandom = getRandomNumber(data.alan.length);
        setData(data.alan[alanRandom][0], data.alan[alanRandom][1]);
        break;

      case "dimitri":
        let dimitriRandom = getRandomNumber(data.dimitri.length);
        setData(data.dimitri[dimitriRandom][0], data.dimitri[dimitriRandom][1]);
        break;

      case "timmy":
        let timmyRandom = getRandomNumber(data.timmy.length);
        setData(data.timmy[timmyRandom][0], data.timmy[timmyRandom][1]);
        break;

      case "black":
        let blackRandom = getRandomNumber(data.black.length);
        setData(data.black[blackRandom][0], data.black[blackRandom][1]);
        break;

      case "blasterjaxx":
        let blasterjaxxRandom = getRandomNumber(data.blasterjaxx.length);
        setData(data.blasterjaxx[blasterjaxxRandom][0], data.blasterjaxx[blasterjaxxRandom][1]);
        break;

      case "bodybangers":
        let bodybangersRandom = getRandomNumber(data.bodybangers.length);
        setData(data.bodybangers[bodybangersRandom][0], data.bodybangers[bodybangersRandom][1]);
        break;

      case "david":
        let davidRandom = getRandomNumber(data.david.length);
        setData(data.david[davidRandom][0], data.david[davidRandom][1]);
        break;

      case "deorro":
        let deorroRandom = getRandomNumber(data.deorro.length);
        setData(data.deorro[deorroRandom][0], data.deorro[deorroRandom][1]);
        break;

      case "eminem":
        let eminemRandom = getRandomNumber(data.eminem.length);
        setData(data.eminem[eminemRandom][0], data.eminem[eminemRandom][1]);
        break;

      case "fit":
        let fitRandom = getRandomNumber(data.fit.length);
        setData(data.fit[fitRandom][0], data.fit[fitRandom][1]);
        break;

      case "headhunterz":
        let headhunterzRandom = getRandomNumber(data.headhunterz.length);
        setData(data.headhunterz[headhunterzRandom][0], data.headhunterz[headhunterzRandom][1]);
        break;

      case "icon":
        let iconRandom = getRandomNumber(data.icon.length);
        setData(data.icon[iconRandom][0], data.icon[iconRandom][1]);
        break;

      case "inna":
        let innaRandom = getRandomNumber(data.inna.length);
        setData(data.inna[innaRandom][0], data.inna[innaRandom][1]);
        break;

      case "katy":
        let katyRandom = getRandomNumber(data.katy.length);
        setData(data.katy[katyRandom][0], data.katy[katyRandom][1]);
        break;

      case "marshmello":
        let marshmelloRandom = getRandomNumber(data.marshmello.length);
        setData(data.marshmello[marshmelloRandom][0], data.marshmello[marshmelloRandom][1]);
        break;

      case "otilia":
        let otiliaRandom = getRandomNumber(data.otilia.length);
        setData(data.otilia[otiliaRandom][0], data.otilia[otiliaRandom][1]);
        break;

      case "panda":
        let pandaRandom = getRandomNumber(data.panda.length);
        setData(data.panda[pandaRandom][0], data.panda[pandaRandom][1]);
        break;

      case "r3hab":
        let r3habRandom = getRandomNumber(data.r3hab.length);
        setData(data.r3hab[r3habRandom][0], data.r3hab[r3habRandom][1]);
        break;

      case "sean":
        let seanRandom = getRandomNumber(data.sean.length);
        setData(data.sean[seanRandom][0], data.sean[seanRandom][1]);
        break;

      case "skrillex":
        let skrillexRandom = getRandomNumber(data.skrillex.length);
        setData(data.skrillex[skrillexRandom][0], data.skrillex[skrillexRandom][1]);
        break;

      case "tujamo":
        let tujamoRandom = getRandomNumber(data.tujamo.length);
        setData(data.tujamo[tujamoRandom][0], data.tujamo[tujamoRandom][1]);
        break;
    }
  });

  const performerHTML = document.getElementById("performer");
  const nextbox = document.getElementById("next-box");
  nextbox.addEventListener("click", () => {
    chooseNextSong(performer);
  });

  performerHTML.innerHTML = perfomername;
}

/**
 * Kiválassza a következő zenét
 * @param {*} performer
 */
function chooseNextSong(performer) {
  readJSON("./data.json", (text) => {
    const data = JSON.parse(text);

    switch (performer) {
      case "against":
        let againstRandom = getRandomNumber(data.against.length);
        setData(data.against[againstRandom][0], data.against[againstRandom][1]);
        break;

      case "alexandra":
        let alexandraRandom = getRandomNumber(data.alexandra.length);
        setData(data.alexandra[alexandraRandom][0], data.alexandra[alexandraRandom][1]);
        break;

      case "armin":
        let arminRandom = getRandomNumber(data.armin.length);
        setData(data.armin[arminRandom][0], data.armin[arminRandom][1]);
        break;

      case "imagine":
        let imagineRandom = getRandomNumber(data.imagine.length);
        setData(data.imagine[imagineRandom][0], data.imagine[imagineRandom][1]);
        break;

      case "neffex":
        let neffexRandom = getRandomNumber(data.neffex.length);
        setData(data.neffex[neffexRandom][0], data.neffex[neffexRandom][1]);
        break;

      case "steve":
        let steveRandom = getRandomNumber(data.steve.length);
        setData(data.steve[steveRandom][0], data.steve[steveRandom][1]);
        break;

      case "violet":
        let violetRandom = getRandomNumber(data.violet.length);
        setData(data.violet[violetRandom][0], data.violet[violetRandom][1]);
        break;

      case "alan":
        let alanRandom = getRandomNumber(data.alan.length);
        setData(data.alan[alanRandom][0], data.alan[alanRandom][1]);
        break;

      case "dimitri":
        let dimitriRandom = getRandomNumber(data.dimitri.length);
        setData(data.dimitri[dimitriRandom][0], data.dimitri[dimitriRandom][1]);
        break;

      case "timmy":
        let timmyRandom = getRandomNumber(data.timmy.length);
        setData(data.timmy[timmyRandom][0], data.timmy[timmyRandom][1]);
        break;

      case "black":
        let blackRandom = getRandomNumber(data.black.length);
        setData(data.black[blackRandom][0], data.black[blackRandom][1]);
        break;

      case "blasterjaxx":
        let blasterjaxxRandom = getRandomNumber(data.blasterjaxx.length);
        setData(data.blasterjaxx[blasterjaxxRandom][0], data.blasterjaxx[blasterjaxxRandom][1]);
        break;

      case "bodybangers":
        let bodybangersRandom = getRandomNumber(data.bodybangers.length);
        setData(data.bodybangers[bodybangersRandom][0], data.bodybangers[bodybangersRandom][1]);
        break;

      case "david":
        let davidRandom = getRandomNumber(data.david.length);
        setData(data.david[davidRandom][0], data.david[davidRandom][1]);
        break;

      case "deorro":
        let deorroRandom = getRandomNumber(data.deorro.length);
        setData(data.deorro[deorroRandom][0], data.deorro[deorroRandom][1]);
        break;

      case "eminem":
        let eminemRandom = getRandomNumber(data.eminem.length);
        setData(data.eminem[eminemRandom][0], data.eminem[eminemRandom][1]);
        break;

      case "fit":
        let fitRandom = getRandomNumber(data.fit.length);
        setData(data.fit[fitRandom][0], data.fit[fitRandom][1]);
        break;

      case "headhunterz":
        let headhunterzRandom = getRandomNumber(data.headhunterz.length);
        setData(data.headhunterz[headhunterzRandom][0], data.headhunterz[headhunterzRandom][1]);
        break;

      case "icon":
        let iconRandom = getRandomNumber(data.icon.length);
        setData(data.icon[iconRandom][0], data.icon[iconRandom][1]);
        break;

      case "inna":
        let innaRandom = getRandomNumber(data.inna.length);
        setData(data.inna[innaRandom][0], data.inna[innaRandom][1]);
        break;

      case "katy":
        let katyRandom = getRandomNumber(data.katy.length);
        setData(data.katy[katyRandom][0], data.katy[katyRandom][1]);
        break;

      case "marshmello":
        let marshmelloRandom = getRandomNumber(data.marshmello.length);
        setData(data.marshmello[marshmelloRandom][0], data.marshmello[marshmelloRandom][1]);
        break;

      case "otilia":
        let otiliaRandom = getRandomNumber(data.otilia.length);
        setData(data.otilia[otiliaRandom][0], data.otilia[otiliaRandom][1]);
        break;

      case "panda":
        let pandaRandom = getRandomNumber(data.panda.length);
        setData(data.panda[pandaRandom][0], data.panda[pandaRandom][1]);
        break;

      case "r3hab":
        let r3habRandom = getRandomNumber(data.r3hab.length);
        setData(data.r3hab[r3habRandom][0], data.r3hab[r3habRandom][1]);
        break;

      case "sean":
        let seanRandom = getRandomNumber(data.sean.length);
        setData(data.sean[seanRandom][0], data.sean[seanRandom][1]);
        break;

      case "skrillex":
        let skrillexRandom = getRandomNumber(data.skrillex.length);
        setData(data.skrillex[skrillexRandom][0], data.skrillex[skrillexRandom][1]);
        break;

      case "tujamo":
        let tujamoRandom = getRandomNumber(data.tujamo.length);
        setData(data.tujamo[tujamoRandom][0], data.tujamo[tujamoRandom][1]);
        break;
    }
  });
}

/**
 * Beállítja a zenenevet
 * és a hozzá tartozó videót
 * @param {*} name
 * @param {*} url
 */
function setData(name, url) {
  document.getElementById("songname").innerHTML = name;
  document.getElementById("video").setAttribute("src", url);
}

/**
 * A szöveganimációért felelős
 */
function playAnimation(state) {
  state ? ((document.getElementById("songname").style.animation = "growshadow 1.5s linear infinite"), (document.getElementById("enjoy").style.animation = "growshadow 1.5s linear infinite")) : ((document.getElementById("songname").style.animation = ""), (document.getElementById("enjoy").style.animation = ""));
}
