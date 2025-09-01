/// <reference types="cypress" />

describe('Cadastro de novo professor', () => {
    const adminEmail = 'admin@exemplo.com'
    const adminSenha = '123'

    const novoProfessor = {
        nome: 'Carlos Oliveira',
        email: 'carlos.oliveira@exemplo.com',
        senha: '123'
    }

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(adminEmail, adminSenha)
        cy.navigateToProfessorCadastro()
    })

    it('[SF] Cadastro de professor sem email - Com falha (campo obrigatório)', () => {
        const professor = { ...novoProfessor, email: '' }
        cy.fillProfessorForm(professor)
        cy.submitProfessorForm()

        cy.contains('E-mail é obrigatório').should('be.visible')
    })

    it('[SF] Cadastro de professor sem nome - Com falha (campo obrigatório)', () => {
        const professor = { ...novoProfessor, nome: '' }
        cy.fillProfessorForm(professor)
        cy.submitProfessorForm()

        cy.contains('Nome é obrigatório').should('be.visible')
    })

    it('[SF] Cadastro de professor sem senha - Com falha (campo obrigatório)', () => {
        const professor = { ...novoProfessor, senha: '' }
        cy.fillProfessorForm(professor)
        cy.submitProfessorForm()

        cy.contains('Senha é obrigatória').should('be.visible')
    })

    it('[SF] Cadastro de novo professor com dados válidos - Com sucesso', () => {
        cy.fillProfessorForm(novoProfessor)
        cy.submitProfessorForm()
    })

    it('[SF] Cadastro de novo professor com email já existente - Com falha', () => {
        cy.fillProfessorForm(novoProfessor)
        cy.submitProfessorForm()

        cy.contains('Email já cadastrado').should('be.visible')
    })
})
