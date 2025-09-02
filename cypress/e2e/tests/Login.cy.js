/// <reference types="cypress" />

describe('Teste de Login', () => {

  const email = 'admin@exemplo.com'
  const senha = '123'
  const usuarioInvalido = 'diegosilva@gmail.com'
  const senhaIncorreta = '123456'
  beforeEach(() => {
    cy.sessionLogin()
  })

  it('[SF] Login de usuário  - Com sucesso', () => {
    cy.userLogin(email, senha)
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
  })

  it('[SF] Login com usuário inválido - Com falha', () => {
    cy.userLogin(usuarioInvalido, senha)
    cy.get('.error-message').should('contain.text', 'Email ou senha incorretos')
  })

  it('[SF] Login com senha incorreta - Com falha', () => {
    cy.userLogin(email, senhaIncorreta)
    cy.get('.error-message').should('contain.text', 'Email ou senha incorretos')
  })

  it('[SF] Login com campos em branco - Com falha', () => {
    cy.visit('/login')
    cy.get('.btn-primary').click()
    cy.contains('.error-message', 'Erro ao fazer login', { timeout: 5000 }).should('be.visible')
  })


  it('[SF] Login com usuário em branco - Com falha', () => {
    cy.userLogin('', senha)
    cy.get('.error-message').should('contain.text', 'Erro ao fazer login')
  })

  it('[SF] Login com senha em branco - Com falha', () => {
    cy.userLogin(email, '')
    cy.get('.error-message').should('contain.text', 'Erro ao fazer login')
  })

})
