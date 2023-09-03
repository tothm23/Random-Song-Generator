# Random-Song-Generator v2.0.0

Generates songs from a random performer

# Description

In this verson I made the light and the dark mode. By clicking the logo, we return to the main page and the random button on the main chooses an artist randomly. With the search bar we can search artists and songs.

# Structure and run

In this version the fronend was created with [Bootstrap 4.6.1](https://getbootstrap.com/docs/4.6/getting-started/introduction/), and for the backend I used [express](https://www.npmjs.com/package/express) within [Node.js](https://nodejs.org/en). Under the developping I used [nodemon](https://www.npmjs.com/package/nodemon) package, so every time it changes, the page is updated. To the frontend the EJS technology helped me. My module connect to my NoSQL type database (**JSON**) synchronously using `fs` package. The JSON database stores the short and full names of artists, songs names and the YouTube links, so I don't need to download the songs and I save storage space. I decorated the buttons with [Google Fonts](https://fonts.google.com/icons) icon. The font family is Roboto, also from [Google Fonts](https://fonts.google.com/icons). I used the [Visual Studio Code](https://code.visualstudio.com/) the coding and [Render](https://render.com/) to deploying.

# Use

This is a web application, so you don't need compile and build, instead visit the [page](https://songgenerator.onrender.com/).

![](https://github.com/tothm23/Random-Song-Generator/blob/2.0.0/result.gif)

# License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

# Tests

## Lighthouse Mobile
![](https://github.com/tothm23/Random-Song-Generator/blob/2.0.0/lighthouse_mobile.png)

## Lighthouse Desktop
![](https://github.com/tothm23/Random-Song-Generator/blob/2.0.0/lighthouse_desktop.png)

## Snyk 
![](https://github.com/tothm23/Random-Song-Generator/blob/2.0.0/snyk.png)
