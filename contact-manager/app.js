import ContactController from './app/controllers/ContactController.js';

document.addEventListener('DOMContentLoaded', () => {
    const contactController = new ContactController();
    contactController.init();
});
