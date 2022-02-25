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
  editIsEnabled: false,
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
  getUserId(event) {
    return parseInt(event.currentTarget.parentElement.parentElement.getAttribute('data-user-id'), 10);
  },
  getUserIndex(id) {
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id === id) {
        return i;
      }
    }
    return null;
  },
  showAll() {
    for (let i = 0; i < this.users.length; i += 1) {
      this.addNewUserRow(this.users[i]);
    }
  },
  create() {
    document.querySelector('.user-form__save-user').addEventListener('click', () => {
      this.store();
    });
  },
  showError(message) {
    this.elements.errorMessage.textContent = message;
    this.elements.errorMessage.classList.remove('d-none');
    setTimeout(() => {
      this.elements.errorMessage.textContent = '';
      this.elements.errorMessage.classList.add('d-none');
    }, 5000);
  },
  //új rész: a külső findAll jön be fetch-re átírva, a success ágon van az eddigi init tartalma
  findAll() {
    fetch(`${this.config.url()}?_sort=name&_order=asc`)
      .then(response => response.json())
      .then(response => {
        this.users = response;
        this.showAll();
        this.create();
      })
      .catch(error => {
        //this.elements.errorMessage.textContent = error;
        this.showError(error);
      });
  },
  getNewUserDatas(id) {
    return {
      id: id + 1,
      name: document.querySelector('.user-form__user-name').value,
      emailAddress: document.querySelector('.user-form__user-email-address').value,
      address: document.querySelector('.user-form__user-address').value,
    };
  },
  getMaxIdNumber() {
    let id = 0;
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id > id) {
        id = this.users[i].id;
      }
    }
    return id;
  },
  store() {
    const id = this.getMaxIdNumber();
    const user = this.getNewUserDatas(id);
    this.users.push(user);
    this.addNewUserRow(user);
    document.querySelector('.user-form').reset();
    return this.users;
  },

  remove(event) {
    if (!this.editIsEnabled && confirm('Biztosan törlöd a felhasználót?')) {
      const id = this.getUserId(event);
      for (let i = 0; i < this.users.length; i += 1) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
          break;
        }
      }
      document.querySelector(`tr[data-user-id="${id}"]`).remove();
      return this.users;
    }
  },
  edit(event) {
    if (!this.editIsEnabled) {
      const id = this.getUserId(event);
      this.editIsEnabled = true;
      this.editOrSave(id);
    }
  },
  getUpdatedUserDatas(id) {
    const rowSelector = `tr[data-user-id="${id}"]`;
    return {
      id,
      name: document.querySelector(`${rowSelector} .user-table__user-name`).value,
      emailAddress: document.querySelector(`${rowSelector} .user-table__user-email-address`).value,
      address: document.querySelector(`${rowSelector} .user-table__user-address`).value,
    };
  },
  save(event) {
    const id = this.getUserId(event);
    const index = this.getUserIndex(id);
    const oldUser = this.users[index];
    const user = this.getUpdatedUserDatas(id);
    if (confirm('Biztosan mented az új adatokat?')) {
      this.users[index] = user;
    } else {
      this.undoInputContents(id, oldUser);
    }
    this.editIsEnabled = false;
    this.editOrSave(id);
    return this.users;
  },
  undoInputContents(id, user) {
    const rowSelector = `tr[data-user-id="${id}"]`;
    const userInputs = Array.from(document.querySelectorAll(`${rowSelector} input`));
    userInputs[0].value = user.name;
    userInputs[1].value = user.emailAddress;
    userInputs[2].value = user.address;
  },
  editOrSave(id) {
    const rowSelector = `tr[data-user-id="${id}"]`;
    const editButton = document.querySelector(`${rowSelector} .user-table__edit-user`);
    const saveButton = document.querySelector(`${rowSelector} .user-table__save-user`);
    const userInputs = Array.from(document.querySelectorAll(`tr[data-user-id="${id}"] input`));
    this.toggleClass(editButton, 'd-none');
    this.toggleClass(saveButton, 'd-none');
    for (let i = 0; i < userInputs.length; i += 1) {
      userInputs[i].disabled = !this.editIsEnabled;
    }
  },
  generateCellForUserName(name) {
    const firstCell = document.createElement('td');
    const textInputForUserName = document.createElement('input');
    textInputForUserName.setAttribute('type', 'text');
    textInputForUserName.setAttribute('name', 'userName');
    textInputForUserName.setAttribute('class', 'form-control user-table__user-name');
    textInputForUserName.disabled = true;
    textInputForUserName.value = name;
    firstCell.appendChild(textInputForUserName);
    return firstCell;
  },
  generateCellForUserEmailAddress(emailAddress) {
    const secondCell = document.createElement('td');
    const emailInputForUserEmailAddress = document.createElement('input');
    emailInputForUserEmailAddress.setAttribute('type', 'email');
    emailInputForUserEmailAddress.setAttribute('name', 'userEmailAddress');
    emailInputForUserEmailAddress.setAttribute('class', 'form-control user-table__user-email-address');
    emailInputForUserEmailAddress.disabled = true;
    emailInputForUserEmailAddress.value = emailAddress;
    secondCell.appendChild(emailInputForUserEmailAddress);
    return secondCell;
  },
  generateCellForUserAddress(address) {
    const thirdCell = document.createElement('td');
    const textInputForUserAddress = document.createElement('input');
    textInputForUserAddress.setAttribute('type', 'text');
    textInputForUserAddress.setAttribute('name', 'userAddress');
    textInputForUserAddress.setAttribute('class', 'form-control user-table__user-address');
    textInputForUserAddress.disabled = true;
    textInputForUserAddress.value = address;
    thirdCell.appendChild(textInputForUserAddress);
    return thirdCell;
  },
  generateCellForButtons() {
    const fourthCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'btn btn-primary user-table__edit-user');
    editButton.textContent = 'Szerkesztés';
    editButton.addEventListener('click', event => {
      this.edit(event);
    });
    fourthCell.appendChild(editButton);
    const saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'btn btn-success d-none user-table__save-user');
    saveButton.textContent = 'Mentés';
    saveButton.addEventListener('click', event => {
      this.save(event);
    });
    fourthCell.appendChild(saveButton);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger user-table__delete-user');
    deleteButton.textContent = 'Törlés';
    deleteButton.addEventListener('click', event => {
      this.remove(event);
    });
    fourthCell.appendChild(deleteButton);
    return fourthCell;
  },
  addNewUserRow(user) {
    const tbody = document.querySelector('.user-table__data');
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('data-user-id', user.id);
    tableRow.appendChild(this.generateCellForUserName(user.name));
    tableRow.appendChild(this.generateCellForUserEmailAddress(user.emailAddress));
    tableRow.appendChild(this.generateCellForUserAddress(user.address));
    tableRow.appendChild(this.generateCellForButtons());
    tbody.appendChild(tableRow);
  },
};

User.init();
