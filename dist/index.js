/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const env = process.env;

console.log(`start`);
for (const key in env) {
    console.log(`${key}: ${env[key]}`);
}
console.log(`end`);

module.exports = __webpack_exports__;
/******/ })()
;