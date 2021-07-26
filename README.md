# Template scss starter

This project is a blueprint for creating a custom stylesheet package.

It utilize [rollup.js](https://rollupjs.org/guide/en/) and the [rollup-plugin-scss](https://github.com/thgh/rollup-plugin-scss).

## Setup

Fork this repo / copy its content. Run `npm install` to install all dependencies. Inside the `/src` folder is an `index.js` file which only has an import to the `main.scss` file. The `main.scss` file is the entry point for the custom stylesheet.

**Creating the final `bundle.css` file**

Run the following command in the root directory of the project. It will create a new `/build` folder with an `index.js` file and a `bundle.css` file.

```shell
npm run build
```

### Customizing the output file name

Inside the `rollup.config.js` file modify the `output` field inside the `scss` options.

```js
scss({
  /*
    ... Other options
  */
  // Before
  output: "build/bundle.css",

  // Changed
  output: "build/my-company-style.css",
});
```
