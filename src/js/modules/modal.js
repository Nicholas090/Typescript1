"use strict";
exports.__esModule = true;
var modals = function () {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        var trigger = document.querySelectorAll(triggerSelector), modal = document.querySelector(modalSelector), close = document.querySelector(closeSelector);
        trigger.forEach(function (item) {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        close.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
        window.addEventListener('click', function (e) {
            if (e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        window.addEventListener('keydown', function (e) {
            if (e.code === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    function modalTimer(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    ;
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    modalTimer('.popup', 3000);
};
exports["default"] = modals;
