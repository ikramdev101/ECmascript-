import Contact from '../models/Contact.js';


export default class ContactController {
    constructor() {
        this.contacts = [];
        this.view = new ContactView();
    }

    init() {
        this.view.bindAddContact(this.handleAddContact.bind(this));
        this.view.bindDeleteContact(this.handleDeleteContact.bind(this));
        this.view.renderContacts(this.contacts);
    }

    handleAddContact(name, phone) {
        const newContact = new Contact(name, phone);
        this.contacts.push(newContact);
        this.view.renderContacts(this.contacts);
    }

    handleDeleteContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
        this.view.renderContacts(this.contacts);
    }
}
