const pagesTitle = Cypress.env('titleText')
context('adding the env and var', () => {
    it('open the app',()=> {
        cy.visit('/')
    })
    it('correctly gives the title on login page',()=> {
        cy.findByText(pagesTitle).should('exist')
    })
    it('login the app',()=> {
        cy.get('#oneio-login-form').within(() => {
            cy.get('#username').type(Cypress.env('LOGIN'))
            cy.get('#password').type(Cypress.env('PASSWORD'))
          })
          cy.get('.oneio-btn-lg').click()
          cy.wait(5000)
     })
    it('correctly gives the title on home page',()=> {
        cy.get('title').contains(pagesTitle)
    })    
})