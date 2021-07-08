"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector), tab = document.querySelectorAll(tabSelector), content = document.querySelectorAll(contentSelector);
    function HideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function ShowTabContent(i) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    HideTabContent();
    ShowTabContent(0);
    header.addEventListener('click', (event) => {
        const target = event.target;
        // let reg: RegExp = /\./;
        // let rep: string = tabSelector.replace(reg, "");
        if (target) {
            tab.forEach((item, i) => {
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
exports.default = tabs;
//# sourceMappingURL=tabs.js.map