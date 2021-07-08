

const forms = () => {
        const form = document.querySelectorAll<HTMLElement>('form'),
              input = document.querySelectorAll<HTMLInputElement>('input') ;


    

                const message = {
                    loading : 'Загрузка',
                    failure : 'Что-то пошло не так...',
                    succses : 'Успешно =)'
                };

                const postData = async (url: string, data: any) =>  {
                    document.querySelector('.status')!.textContent = message.loading;
                    let res = await fetch(url, {
                        method: "POST",
                        body: data
                    });

                    return await res.text();
                };

                const clearInputs = () => {
                        input.forEach(item => {
                           item.value = '';
                        });
                };

          

                form.forEach( item => {
                    item.addEventListener('submit', (e) => {
                       e.preventDefault();
                       

                        let statusMessage = document.createElement('div');
                        statusMessage.classList.add('status');
                        item.appendChild(statusMessage);

                        const formData = new FormData(item as HTMLFormElement);
                           
                        postData('assets/server.php', formData)
                            .then(result =>  {
                                console.log(result);
                                statusMessage.textContent = message.succses;
                            })
                            .catch(() => {
                                statusMessage.textContent = message.failure;
                            })
                            .finally(() => {
                                clearInputs();
                                setTimeout(() => {
                                    statusMessage.remove();
                                }, 5000);
                            })
                        
                    });
                });


};

export default forms;