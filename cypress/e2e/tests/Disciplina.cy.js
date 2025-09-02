/// <reference types="cypress" />

describe('Cadastro de nova disciplina', () => {
    const adminEmail = 'admin@exemplo.com'
    const adminSenha = '123'

    const novaDisciplina = {
        nome: 'Matemática Avançada',
        codigo: 'MAT121',
        professorId: '1'
    }

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(adminEmail, adminSenha)
        cy.navigateToDisciplinaCadastro()
    })

    it('[SF] Cadastro de nova disciplina com código único - Com sucesso', () => {
        cy.fillDisciplinaForm(novaDisciplina)
        cy.submitDisciplinaForm()
    })

    it('[SF] Cadastro de disciplina com código já existente - Com falha', () => {
        cy.fillDisciplinaForm(novaDisciplina)
        cy.submitDisciplinaForm()

        cy.contains('Já existe uma disciplina com esse código').should('be.visible')
    })

    it('[SF] Cadastro de disciplina sem nome - Com falha (campo obrigatório)', () => {
        const disciplina = { ...novaDisciplina, nome: '' }
        cy.fillDisciplinaForm(disciplina)
        cy.submitDisciplinaForm()

        cy.contains('Nome é obrigatório').should('be.visible')
    })

    it('[SF] Cadastro de disciplina sem código - Com falha (campo obrigatório)', () => {
        const disciplina = { ...novaDisciplina, codigo: '' }
        cy.fillDisciplinaForm(disciplina)
        cy.submitDisciplinaForm()

        cy.contains('Código é obrigatório').should('be.visible')
    })

})