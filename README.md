# A minimal webpack setup

## Features

#### dev

- babel + `babel/polyfill`
- `webpack-dev-server` for live editing
- loaders for css, files (including images)
- SASS support
- CSS autoprefixing with postCSS
- CSS minification in production with `MiniCssExtractPlugin` and `OptimizeCssAssetsPlugin`
- eslint
- JS minification with `Terser` in production mode

- lodash is included, mostly just as an example of importing a package (`npm uninstall` it if you don't need it!)

## Not currently included

- HMR
- tree shaking
- testing

## Usage

- `git clone https://github.com/ensconced/webpack_starter`
- `cd ./webpack-starter`
- `npm i`
- `npm start` for live development
- `npm run build` to build src into `dist` directory