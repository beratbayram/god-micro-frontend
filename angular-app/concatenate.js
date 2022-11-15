const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-10-webcomponents-demo/runtime.js",
    "./dist/angular-10-webcomponents-demo/polyfills.js",
    "./dist/angular-10-webcomponents-demo/main.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/index.js");
  console.log("");
  console.log("-----------------------------------------------------");
  console.log("✅ Concatenated bundle to elements/index.js");
  await fs.copyFile(
    "./dist/angular-10-webcomponents-demo/styles.css",
    "elements/styles.css"
  );
  console.log("✅ Copied styles to elements/styles.css");
  console.log("-----------------------------------------------------");
  console.log("");
  //await fs.copy('./dist/angular-10-webcomponents-demo/assets/', 'elements/assets/' )
})();
