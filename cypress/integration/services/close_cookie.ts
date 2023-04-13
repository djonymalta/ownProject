function closepopup () {
    const today = new Date;
const COOKIE_VALUE = "ACCEPTED";

Cypress.on("window:before:load", window => {
    window.document.cookie = `OptanonAlertBoxClosed=${today.toISOString()}`
});
}

export { closepopup }