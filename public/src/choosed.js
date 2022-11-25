/**
 * performs the search
 */
function search() {
  // the searched value
  const searchedSong = document.getElementById("search-bar").value.toLowerCase();

  // the searched songs
  let searchedSongs = [];

  // the searched urls
  let searchedUrls = [];

  // if there is match, runs up to fullNamesIndex
  for (let j = 0; j < data[performerIndex()].song.length; j++) {
    if (data[performerIndex()].song[j].toLowerCase().startsWith(searchedSong)) {
      searchedSongs.push(data[performerIndex()].song[j]);
      searchedUrls.push(data[performerIndex()].url[j]);
    }
  }

  displayCharacters(searchedSongs, searchedUrls);
}

let data = [];

// Fetch API  https://www.w3schools.com/jsref/api_fetch.asp
async function loadData() {
  const res = await fetch("../data.json");
  data = await res.json();
  displayCharacters(data[performerIndex()].song, data[performerIndex()].url);
  document.getElementById("myfooter").classList.add("fixed-bottom");
}

/**
 * display the songs and urls in a list
 * @param {*} songs
 * @param {*} urls
 */
function displayCharacters(songs, urls) {
  let txt = "";

  for (let i = 0; i < songs.length; i++) {
    txt +=
      `
      <li class="list-group-item songs pb-3">
      <a href="` +
      urls[i] +
      `" target="_blank">` +
      songs[i] +
      `</a>
    </li>
    </div>
    `;
  }
  document.getElementById("song").innerHTML = txt;
}

loadData();

/**
 * The searched performers index
 * @returns
 */
function performerIndex() {
  // the searched performer
  const performer = document.getElementById("choosedPerformer").innerHTML;

  // collect all names to an array
  const fullNames = [];
  for (let i = 0; i < data.length; i++) {
    fullNames.push(data[i].full_name);
  }

  // get the index of actual performer
  const fullNamesIndex = fullNames.indexOf(performer);

  return fullNamesIndex;
}
