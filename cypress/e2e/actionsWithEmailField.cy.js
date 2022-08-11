context('UI actions with email field', () => {
    beforeEach('visit the app main page', () => {
        cy.visit('/')
    })
    it('type an input field',()=> {
        cy.findAllByPlaceholderText('Email').type('My email').should('have.value', 'My email')
    })
    it('clear an input field',()=> {
        cy.findAllByPlaceholderText('Email').type('My email').should('have.value', 'My email')
            .clear().should('have.value', '')
    }) 
})