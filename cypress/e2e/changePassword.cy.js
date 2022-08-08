context('work with settings page', () => {
    it('change the password',()=> {
        //login the app
        cy.visit('/')
        cy.get('#oneio-login-form').within(() => {
            cy.get('#username').type(Cypress.env('LOGIN'))
            cy.get('#password').type(Cypress.env('PASSWORD'))
        })
        cy.get('.oneio-btn-lg').click()
        //go to settings
        cy.get('#accountDropdown').click()
        cy.get('button').contains('My settings').click()
        //change the password
        cy.get('.card-body').eq(1).within(() => {    
            cy.findByPlaceholderText('Current password').click().type(Cypress.env('PASSWORD'))
            cy.findByPlaceholderText('New password').click().type(Cypress.env('PASSWORD'))
            cy.findByPlaceholderText('Confirm new password').type(Cypress.env('PASSWORD'))            
        })
        cy.get('button').contains('Change password').click()
        //check the alert about password changing
        cy.contains('Action successful').should('be.visible')
        cy.contains('Password is changed').should('be.visible')
    })
})