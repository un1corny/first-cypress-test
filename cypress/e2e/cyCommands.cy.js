context('cy commands and custom commands', () => {
    const token = 'abc3210'
    it('sets a token in local storage', () => {
        cy.setLocalStorage('token', token)
    })
    it('sets and gets a token from local storage', () => {
        cy.setLocalStorage('token', token)
        cy.getLocalStorage('token').should('eq', token)
    }) 
    it('overwrite the type command by using sensitive characters', () => {
        cy.visit('/')
        cy.findByPlaceholderText('Email').type(Cypress.env('LOGIN'), { sensitive: true })
        cy.findByPlaceholderText('Password').type(Cypress.env('PASSWORD'), { sensitive: true })
    })   
}) 