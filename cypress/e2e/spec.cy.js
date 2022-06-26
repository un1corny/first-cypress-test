describe('My First Test', () => {
  it('User Story login and add new endpoint', () => {
    // Login
    cy.visit('https://oneio.app/')
    cy.get('#oneio-login-form').within(() => {
      cy.get('#username').should('have.attr', 'placeholder', 'Email').type(Cypress.env('LOGIN'))
      cy.get('#password').should('have.attr', 'placeholder', 'Password').type(Cypress.env('PASSWORD'))
    })

    cy.intercept('/user').as('getUser')
    cy.intercept('/subscriptions').as('getSubscription')
    cy.get('.oneio-btn-lg').click()
    cy.wait('@getUser')

    // Open subscriptions modal
    cy.wait('@getSubscription')
    cy.get('.subscription-switcher').click()

    // Select QA environment
    cy.get('#environment').select('QA').should('have.value', 'TEST')
    cy.get('.footer-btn-confirm').click()

    // Go to the Endpoints page
    cy.get('.list-unstyled').find('li').eq(3).click()
    cy.intercept('/endpoints*').as('goToEndpoints')
    cy.wait('@goToEndpoints')

    // Add new endpoint
    cy.intercept('/endpointTypes').as('getEndpointTypes')
    cy.get('button').contains('+ New endpoint').click()
    cy.wait('@getEndpointTypes')

    // Add endpoint HubSpot
    cy.get('figcaption').contains('HubSpot').click()
    cy.get('button').contains('Create').click()
    cy.intercept('/endpointTypes/hubspot_dev').as('addHubspotDev')
    cy.wait('@addHubspotDev')

    cy.get('input[name="uri"]').type('https://www.hubspot.com')

    cy.get('label').contains('Timezone').parent().within(() => {
      cy.get('select').focus().select('UTC-11 Pacific/Midway')
        .should(($select) => {
          expect($select.val()).to.contain('Pacific/Midway')
        })
    })
    cy.get('button').contains('Create').click()

    // Check endpoint was added
    cy.intercept('/endpointConfigurations/editor/hubspot_dev').as('endpointConfigurationsHubspot')
    cy.wait('@endpointConfigurationsHubspot')
    cy.get('.list-unstyled').find('li').eq(3).click()
    cy.get('.circle-info').contains('HubSpot')

  })
})
