const User = {
    config: {
        baseUrl: 'http://localhost',
        portNumber: 3000,
        dataUrl: 'users',
        url() {
            return `${this.baseUrl}:${this.portNumber}/${this.dataUrl}`;
        },
    },
    elements: {
        userTableData: document.querySelector('.user-table__data'),
        errorMessage: document.querySelector('.error__message'),
    },
    users: [],
    init() {
        this.findAll();
    },
    toggleClass(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    },
    showError(message) {
        this.elements.errorMessage.textContent = message;
        this.elements.errorMessage.classList.remove('d-none');
        setTimeout(() => {
            this.elements.errorMessage.textContent = '';
            this.elements.errorMessage.classList.add('d-none');
        }, 5000);
    },
    findAll() {
        fetch(`${this.config.url()}?_sort=name&_order=asc`)
            .then(response => response.json())
            .then((response) => {
                this.users = response;
                this.showAll();
            })
            .catch((error) => {
                this.elements.errorMessage.textContent = error;
            });
    },
    showAll() {
        let rows = '';
        for (let i = 0; i < this.users.length; i += 1) {
            rows += this.createNewRow(this.users[i]);
        }
        this.elements.userTableData.innerHTML = rows;
    },
    createNewRow(user) {
        const tableRow = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.emailAddress}</td>
                    <td>${user.address}</td>
                    <td>
                        <button class="btn btn-primary user-table__edit-user">Szerkesztés</button>
                        <button class="btn btn-success d-none user-table__save-user">Mentés</button>
                        <button class="btn btn-danger user-table__delete-user">Törlés</button>
                    </td>
                </tr>`;
        return tableRow;
    },
};

User.init();
