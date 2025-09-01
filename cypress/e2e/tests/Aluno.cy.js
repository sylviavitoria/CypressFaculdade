/// <reference types="cypress" />

describe('Cadastro de novo aluno', () => {
    const adminEmail = 'admin@exemplo.com'
    const adminSenha = '123'

    const novoAluno = {
        nome: 'Junior da Silva',
        email: 'juniA.silva@exemplo.com',
        matricula: '35990001',
        senha: '123'
    }

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(adminEmail, adminSenha)
        cy.navigateToAlunoCadastro()
    })

    it('[SF] Cadastro de aluno sem email - Com falha (campo obrigatório)', () => {
        const aluno = { ...novoAluno, email: '' } 
        cy.fillAlunoForm(aluno)
        cy.submitAlunoForm()

        cy.contains('E-mail é obrigatório').should('be.visible')
    })

    it('[SF] Cadastro de aluno sem nome - Com falha (campo obrigatório)', () => {
        const aluno = { ...novoAluno, nome: '' }
        cy.fillAlunoForm(aluno)
        cy.submitAlunoForm()

        cy.contains('Nome é obrigatório').should('be.visible')
    })

    it('[SF] Cadastro de aluno sem senha - Com falha (campo obrigatório)', () => {
        const aluno = { ...novoAluno, senha: '' } 
        cy.fillAlunoForm(aluno)
        cy.submitAlunoForm()

        cy.contains('Senha é obrigatória').should('be.visible')
    })

      it('[SF] Cadastro de novo aluno com dados válidos - Com sucesso', () => {
        cy.fillAlunoForm(novoAluno)
        cy.submitAlunoForm()

      })
})
