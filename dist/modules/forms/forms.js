"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms = () => {
    const form = document.querySelectorAll('form'), input = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка',
        failure: 'Что-то пошло не так...',
        succses: 'Успешно =)'
    };
    const postData = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
        document.querySelector('.status').textContent = message.loading;
        let res = yield fetch(url, {
            method: "POST",
            body: data
        });
        return yield res.text();
    });
    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
    };
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            const formData = new FormData(item);
            postData('assets/server.php', formData)
                .then(result => {
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
            });
        });
    });
};
exports.default = forms;
//# sourceMappingURL=forms.js.map