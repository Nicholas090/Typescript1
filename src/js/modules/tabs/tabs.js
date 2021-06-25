"use strict";
exports.__esModule = true;
var tabs = function (headerSelector, tabSelector, contentSelector, activeClass) {
    var header = document.querySelector(headerSelector), tab = document.querySelectorAll(tabSelector), content = document.querySelectorAll(contentSelector);
    function HideTabContent() {
        content.forEach(function (item) {
            item.style.display = 'none';
        });
        tab.forEach(function (item) {
            item.classList.remove(activeClass);
        });
    }
    function ShowTabContent(i) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    HideTabContent();
    ShowTabContent(0);
    header.addEventListener('click', function (event) {
        var target = event.target;
        // let reg: RegExp = /\./;
        // let rep: string = tabSelector.replace(reg, "");
        if (target) {
            tab.forEach(function (item, i) {
                if (target == item || target.parentNode == item) {
                    HideTabContent();
                    ShowTabContent(i);
                }
            });
        }
        else {
            console.log('error');
            // console.log(rep);
        }
    });
};
exports["default"] = tabs;
