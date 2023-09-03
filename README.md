# Random-Song-Generator v1.0.0

Generates random song from random performer

# Description

This project was created in _15th February 2022_ and it contains 28 performers with 164 songs. Musics are  [YouTube](https://www.youtube.com/) links contained in an `<iframe>` element. If you move the cursor above the `<iframe>` tag, an animation appears on the text. You can request the next song with the play button and you can search performer in the search bar. If you want to choose a performer randomly, press the random button. If you want to go back to the perfomers you must be reload the page.

# Structure and run

This project was created with pure **HTML**, **CSS** and **Javascript** code without any framework. The JavaScript code connect to my NoSQL type database (**JSON**) with **AJAX**. The JSON database stores the songs names and only YouTube links, so I don't need to download the songs and I save storage space. I decorated the play button with [Google Fonts](https://fonts.google.com/icons) icon. The font family is Roboto, also from [Google Fonts](https://fonts.google.com/icons). I used the [Visual Studio Code](https://code.visualstudio.com/) the coding and [Nethely](https://www.nethely.hu/) to deploying.

# Use

This is a web application, so you don't need compile and build, instead visit the [page](http://www.songgenerator.nhely.hu/).

![](https://github.com/tothm23/Random-Song-Generator/blob/1.0.0/result.gif)

# License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

# Tests

## Lighthouse Mobile
![](https://github.com/tothm23/Random-Song-Generator/blob/1.0.0/lighthouse_mobile.png)

## Lighthouse Desktop
![](https://github.com/tothm23/Random-Song-Generator/blob/1.0.0/lighthouse_desktop.png)

