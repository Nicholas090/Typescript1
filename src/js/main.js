"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./slider");
const modal_1 = __importDefault(require("./modules/modal"));
const tabs_1 = __importDefault(require("./modules/tabs/tabs"));
const forms_1 = __importDefault(require("./modules/forms/forms"));
const changeState_1 = __importDefault(require("./modules/changeState/changeState"));
const timer_1 = __importDefault(require("./modules/timer/timer"));
window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let deadline = '2021-09-3';
    changeState_1.default(modalState);
    modal_1.default();
    tabs_1.default('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs_1.default('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs_1.default('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms_1.default();
    timer_1.default('.container1', deadline);
});
