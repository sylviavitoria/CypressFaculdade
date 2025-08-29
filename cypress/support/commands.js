// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//

Cypress.Commands.add('sessionLogin', () => {
	cy.visit('/login')
	cy.get('#email').should('be.visible')
})

Cypress.Commands.add('userLogin', (email, senha) => {
  cy.get('#email').should('be.visible').clear()
  if (email) cy.get('#email').type(email)

  cy.get('#senha').should('be.visible').clear()
  if (senha) cy.get('#senha').type(senha) 

  cy.get('.btn-primary').should('be.visible').click()
})


// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })