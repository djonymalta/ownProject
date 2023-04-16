/// <reference types="cypress" />
    describe('Visit The Login Page and Find elementos to automation like: Texts, images, icons and others ', () => {
    before('Visit the Login Page', () => {
        cy.login()
    });
    it('Shoul validate cookie: | Texts | buttons | Links', () => {
        

        // Police Title
        cy.get('#onetrust-policy-title').should('have.text', Cypress.env('cookies').POLICY_TITLE)        
        // Police Text
        cy.get('#onetrust-policy-text').contains(Cypress.env('cookies').POLICY_TEXT)
        
        // Cookie Police Link 
        cy.get('#onetrust-policy-text > a').should('be.visible')
        
        // Cookie Settings
        cy.get('#onetrust-pc-btn-handler').should('be.visible')

        // Accept all cokies
        cy.get('#onetrust-pc-btn-handler').should('be.visible')

    });
it('Validate all: | Buttons |  texts | placeholders | Labels | Images | ... |  At Login Page', () => {
    
    // Don't have an account yet?
    cy.get('.signup-link__Text-sc-kahi73-1').should('be.visible')

    // Need Help?
    cy.get('.atoms__Link-sc-36rp8b-10').should('be.visible')

    // Sign Up
    cy.get('.button__Button-sc-18qod6g-0').should('be.visible')

    // Logo Typeform
    cy.get('img').should('be.visible')

    // Form Title
    cy.get('.okta-form-title').should('have.text', 'Hello, who’s this?')

    // Email Label
    cy.get('.margin-btm-5 > .okta-form-label > label').contains('Email ')

    //  Email  Input | placeholder
    cy.get('#okta-signin-username').should('be.visible')
    cy.get('#okta-signin-username').invoke('attr', 'placeholder').should('include', 'bruce@wayne.com')

    // Password Label
    cy.get('.margin-btm-30 > .okta-form-label > label').contains('Password ')

    // Password Input | Placeholder
    cy.get('#okta-signin-password').should('be.visible')
    cy.get('#okta-signin-password').invoke('attr', 'placeholder').should('include', 'At least 8 characters')

    // Forgot password Link 
    cy.get('.custom-buttons-container > a').should('have.text', 'Forgot password?')

    // Log in to Typeform Button
    cy.get('#okta-signin-submit').should('be.visible')

    // Auth Divider 
    cy.get('.auth-divider').should('be.visible')

    // Auth divider Text
    cy.get('.auth-divider-text').should('have.text', 'OR')

    // Login with social account Google
    cy.get('.social-auth-google-button').should('be.visible')

    // Login with social account Microsoft
    cy.get('.social-auth-microsoft-button').should('be.visible')

    // Log in with SSO
    cy.get('.sso-button-container > a').should('be.visible')
});
    
});


