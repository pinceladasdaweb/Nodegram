# Nodegram

Display your latest Instagram photos with Node.js.


![](https://raw.github.com/pinceladasdaweb/Nodegram/master/screenshot.jpg)

## Getting Started

```bash
# Get the latest snapshot
$ git clone https://github.com/pinceladasdaweb/Nodegram.git myproject
$ cd myproject
$ git remote rm origin

# Install NPM dependencies
$ npm install
```

## How to Configure

Open the file [`config/config.js`](config/config.js) and fill in your details:

| Name                               | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **pageTitle**                      | Configure the page title here.                              |
| **pageSubTitle**                   | Configure the page subtitle here.                           |
| **aboutText**                      | Configure the about text here.                              |
| **email**                          | Put your contact email here.                                |
| **social**                         | Configure your social links here.                           |
| **copyright**                      | Insert your company name here.                              |
| **access_token**                   | Insert your instagram access token here.                    |
| **count**                          | Number of photos to display.                                |

## How to obtain a Instagram Acess Token

[See the wiki how to get your token](https://github.com/pinceladasdaweb/Nodegram/wiki)

## How to run this project

With the completed settings, run the following command in the terminal:

```bash
$ npm start
```

## How to customize CSS

Open files in public/css/souce/ and customize as you wish. Then run the following command in the terminal to make the CSS minification:

```bash
$ grunt
```

## Browser Support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/Nodegram/releases) for detailed changelog.

## License

[MIT](LICENSE)
