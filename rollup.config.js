import scss from "rollup-plugin-scss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    file: "build/index.js",
    format: "esm",
  },
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, "../../node_modules/"),
        "node_modules/",
      ],
      output: "build/bundle.css",
      outputStyle: "compressed",
    }),
  ],
};
