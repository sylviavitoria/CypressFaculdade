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

Cypress.Commands.add('navigateToAlunoCadastro', () => {
  cy.get('#menu-alunos').click()       
  cy.get('#tab-create').click() 
})

Cypress.Commands.add('fillAlunoForm', (aluno) => {
  if (aluno.nome) cy.get('#nome').clear().type(aluno.nome)
  if (aluno.email) cy.get('#email').clear().type(aluno.email)
  if (aluno.matricula) cy.get('#matricula').clear().type(aluno.matricula)
  if (aluno.senha) cy.get('#senha').clear().type(aluno.senha)
})

Cypress.Commands.add('submitAlunoForm', () => {
  cy.get('#btn-cadastrar').click()
})

Cypress.Commands.add('navigateToProfessorCadastro', () => {
  cy.get('#menu-professores').click()       
  cy.get('#tab-create').click() 
})

Cypress.Commands.add('fillProfessorForm', (professor) => {
  if (professor.nome) cy.get('#nome').clear().type(professor.nome)
  if (professor.email) cy.get('#email').clear().type(professor.email)
  if (professor.senha) cy.get('#senha').clear().type(professor.senha)
})

Cypress.Commands.add('submitProfessorForm', () => {
  cy.get('#btn-cadastrar').click()
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