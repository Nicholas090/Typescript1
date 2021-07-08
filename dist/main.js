"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./slider");
const modal_1 = require("./modules/modal");
const tabs_1 = require("./modules/tabs/tabs");
const forms_1 = require("./modules/forms/forms");
window.addEventListener('DOMContentLoaded', () => {
    modal_1.default();
    tabs_1.default('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs_1.default('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms_1.default();
});
//# sourceMappingURL=main.js.map