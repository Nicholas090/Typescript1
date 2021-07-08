const tabs = (headerSelector: string, tabSelector: string, contentSelector: string, activeClass: string, display: string = 'block'): void => {

    const header = document.querySelector<HTMLElement>(headerSelector) ,
            tab = document.querySelectorAll<HTMLElement>(tabSelector),
            content = document.querySelectorAll<HTMLElement>(contentSelector);


    function HideTabContent() {
        content.forEach(item => {
           item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    
    function ShowTabContent(i: number ) {
        
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
       

    }


    HideTabContent();
    ShowTabContent(0);

    header!.addEventListener('click',  (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        // let reg: RegExp = /\./;
        // let rep: string = tabSelector.replace(reg, "");
  
        if (target){
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    HideTabContent();
                    ShowTabContent(i);
                }
            });
        } else {
            console.log('error');
            // console.log(rep);
        }
    });
};

export default tabs;