import "./slider";
import modals from "./modules/modal";
import tabs from "./modules/tabs/tabs";
import forms from "./modules/forms/forms";
import changeModalState from "./modules/changeState/changeState";
import timer from "./modules/timer/timer";
window.addEventListener('DOMContentLoaded', () => {

    let modalState = {} ;
    let deadline = '2021-09-3';
    changeModalState(modalState);

    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();
    timer('.container1', deadline);
});