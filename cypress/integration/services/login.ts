/// <reference types="cypress" />
import { closepopup } from './close_cookie'
export function login () {
    cy.visit('/login')
    closepopup()
    
    cy.get('[data-qa="field-email"').type(Cypress.env('valid_credentials').email)
    cy.get('[id="okta-signin-password"]').type(Cypress.env('valid_credentials').password, {log: false})
    cy.get('#okta-signin-submit').click()
}