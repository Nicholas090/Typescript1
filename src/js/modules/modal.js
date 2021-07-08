"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector), modal = document.querySelector(modalSelector), close = document.querySelector(closeSelector), win = document.querySelectorAll('[data-modal]');
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                win.forEach(i => {
                    i.style.display = 'none';
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            win.forEach(i => {
                i.style.display = 'none';
            });
        });
        window.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    function modalTimer(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    ;
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // modalTimer('.popup', 300000);
};
exports.default = modals;
