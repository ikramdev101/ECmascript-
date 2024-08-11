export default class ContactView {
    constructor() {
        this.contactListElement = document.getElementById('contactList');
        this.nameInput = document.getElementById('nameInput');
        this.phoneInput = document.getElementById('phoneInput');
        this.addContactButton = document.getElementById('addContactButton');
    }

    clearInput() {
        this.nameInput.value = '';
        this.phoneInput.value = '';
    }

    renderContacts(contacts) {
        this.contactListElement.innerHTML = '';
        contacts.forEach(contact => {
            const contactElement = document.createElement('div');
            contactElement.className = 'contact';
            contactElement.innerHTML = `
                <span>${contact.name} - ${contact.phone}</span>
                <button class="deleteButton">Delete</button>
            `;
            this.contactListElement.appendChild(contactElement);
        });
    }

    bindAddContact(handler) {
        this.addContactButton.addEventListener('click', () => {
            const name = this.nameInput.value;
            const phone = this.phoneInput.value;
            if (name && phone) {
                handler(name, phone);
                this.clearInput();
            }
        });
    }

    bindDeleteContact(handler) {
        this.contactListElement.addEventListener('click', event => {
            if (event.target.className === 'deleteButton') {
                const contactElement = event.target.parentElement;
                const contactName = contactElement.firstElementChild.textContent.split(' - ')[0];
                handler(contactName);
            }
        });
    }
}
