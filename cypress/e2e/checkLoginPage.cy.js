context('checkimg some elements on the login page', () => {
    it('open the app',()=> {
        cy.visit('https://oneio.app/login')
        cy.wait(5000).reload()
    })
    it('check the link in the navbar', () => {
        cy.get('.navbar').find('a').should('exist')
    })
    it('has an h1 on the page', () => {
        cy.get('h1').should('exist')
    })
    it('check the correct h1 text', () => {
        cy.get('h1').should('contain.text', 'Welcome Back')
    })
    it('check the text uder the header', () => {
        cy.get('.d-flex').eq(0).within(()=> {
            cy.get('p').should('contain.text', 'New to ONEiO?')
            cy.get('a').should('contain.text', 'Sign Up instead')
        })
    })
    it('check the button show password', () => {
        cy.get('.d-flex').eq(1).within(()=> {
            cy.get('button').should('exist')
            cy.get('button').should('contain.text', 'Show Password')
        })
    })
})


