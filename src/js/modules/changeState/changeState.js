"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'), windowWidth = document.querySelector('#width'), windowHeight = document.querySelector('#height'), windowType = document.querySelector('#view_type'), windowProfile = document.querySelectorAll('.checkbox');
    windowForm.forEach((item, index) => {
        item.addEventListener('click', () => {
            state.form = index;
            console.log(typeof (state));
        });
    });
};
exports.default = changeModalState;
