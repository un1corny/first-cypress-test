context('mocking data for responses', () => {
    beforeEach(() => {
        cy.fixture('userLoginData.json').then(function (data) {
            this.data = data
        })
    })
    it('uses fixture data in a request', function () {
        cy.visit('/')
        cy.get('#oneio-login-form').within(() => {
            cy.get('#username').type(Cypress.env('LOGIN'))
            cy.get('#password').type(Cypress.env('PASSWORD'))
        })
        cy.get('.oneio-btn-lg').click()
        cy.intercept('GET', '/user', this.data).as('getUser')
        cy.wait('@getUser').then((res) => {
            cy.wrap(res)
        })
    })
    it('gets data from a fixture', () => {
        cy.fixture('userLoginData.json').then((data) => {
            expect(data.email).to.contain('alina@talaluev.me')
        })
    })
    it('updates fixture data inline', () => {
        cy.fixture('userLoginData.json').then((data) => {
            data.fullName = 'Test Test'
            expect(data.fullName).not.contain('Alina Chistiakova')
        })
    })
}) 
