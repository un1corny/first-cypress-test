context('working with css classes', () => {
    before('login the app', () => {
        cy.visit('/')
        cy.get('#oneio-login-form').within(() => {
            cy.get('#username').type(Cypress.env('LOGIN'))
            cy.get('#password').type(Cypress.env('PASSWORD'))
        })
        cy.get('.oneio-btn-lg').click()
    })
    it('shows the class correctly',()=> {
        cy.get('#accountDropdown').click()
        //check buttons have dropdown-item class
        cy.get('.dropdown-menu').eq(1).within(() => {
                cy.get('button').eq(0).should('have.class', 'dropdown-item')
                cy.get('button').eq(1).should('have.class', 'dropdown-item')
                cy.get('button').eq(2).should('have.class', 'dropdown-item')
            })
        //check h6 doesn't have dropdown-item class    
        cy.get('.dropdown-menu').eq(1).find('h6').should('not.have.class', 'active')
    }) 
    it('link to the settings works correctly', () => {
        //forcing the action we don't need to do what user does
        cy.get('.dropdown-menu').find('.dropdown-item').first().click({force:true})
        cy.url().should('include', '/settings')
    })  
})