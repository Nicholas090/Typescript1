

const changeModalState = (state: any) => {
    const windowForm = document.querySelectorAll<HTMLElement>('.balcon_icons_img'),
         windowWidth = document.querySelector<HTMLElement>('#width'),
         windowHeight = document.querySelector<HTMLElement>('#height'),
        windowType = document.querySelector<HTMLElement>('#view_type'),
        windowProfile = document.querySelectorAll<HTMLElement>('.checkbox');

      

        windowForm.forEach((item, index) => {
            item.addEventListener('click' , () => {
                state.form = index;
                console.log(typeof(state));
                
            });
        });
 
    }

export default changeModalState;