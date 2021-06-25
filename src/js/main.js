"use strict";
exports.__esModule = true;
require("./slider");
var modal_1 = require("./modules/modal");
var tabs_1 = require("./modules/tabs/tabs");
window.addEventListener('DOMContentLoaded', function () {
    modal_1["default"]();
    tabs_1["default"]('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs_1["default"]('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});
