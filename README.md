# Nodegram

Display your latest Instagram photos with Node.js.


![](https://raw.github.com/pinceladasdaweb/Nodegram/master/screenshot.jpg)

## Getting Started

```bash
# Get the latest snapshot
$ git clone --depth=1 https://github.com/pinceladasdaweb/Nodegram.git myproject
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
| **access_token**                   | Insert your instagram access token here.                    |

## How to obtain a Instagram Acess Token

You can get one here: [http://www.pinceladasdaweb.com.br/instagram/access-token/](http://www.pinceladasdaweb.com.br/instagram/access-token/)

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

## Contributing

Check [CONTRIBUTING.md](https://github.com/pinceladasdaweb/Nodegram/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/Nodegram/releases) for detailed changelog.

## License

[MIT](LICENSE)
