const User = {
  users: findAll(),
  init() {
    this.showAll();
  },
  showAll() {
    for (let i = 0; i < this.users.length; i += 1) {
      this.addNewUserRow(this.users[i]);
    }
  },
  generateCellForUserName(name) {
    const firstCell = document.createElement('td');
    firstCell.textContent = name;
    return firstCell;
  },
  generateCellForUserEmailAddress(emailAddress) {
    const secondCell = document.createElement('td');
    secondCell.textContent = emailAddress;
    return secondCell;
  },
  generateCellForUserAddress(address) {
    const thirdCell = document.createElement('td');
    thirdCell.textContent = address;
    return thirdCell;
  },
  generateCellForButtons() {
    const fourthCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'btn btn-primary user-table__edit-user');
    editButton.textContent = 'Szerkesztés';
    fourthCell.appendChild(editButton);
    const saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'btn btn-success d-none user-table__save-user');
    saveButton.textContent = 'Mentés';
    fourthCell.appendChild(saveButton);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger user-table__delete-user');
    deleteButton.textContent = 'Törlés';
    fourthCell.appendChild(deleteButton);
    return fourthCell;
  },
  addNewUserRow(user) {
    const tbody = document.querySelector('.user-table__data');
    const tableRow = document.createElement('tr');
    tableRow.appendChild(this.generateCellForUserName(user.name));
    tableRow.appendChild(this.generateCellForUserEmailAddress(user.emailAddress));
    tableRow.appendChild(this.generateCellForUserAddress(user.address));
    tableRow.appendChild(this.generateCellForButtons());
    tbody.appendChild(tableRow);
  },
};

User.init();
