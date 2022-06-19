describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('#email1')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
