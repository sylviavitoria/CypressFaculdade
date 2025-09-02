/// <reference types="cypress" />

describe('Matrícula de Alunos em Disciplinas', () => {
    const adminEmail = 'admin@exemplo.com'
    const adminSenha = '123'

    const novaMatricula = {
        alunoId: '1',
        disciplinaId: '1' 
    }

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(adminEmail, adminSenha)
        cy.navigateToMatriculaCadastro()
    })

    it('[SF] Matrícula sem seleção de aluno - Com falha (campo obrigatório)', () => {
        const matricula = { ...novaMatricula, alunoId: undefined }
        cy.fillMatriculaForm(matricula)         
        cy.submitMatriculaForm()

        cy.contains('Seleção do aluno é obrigatória').should('be.visible')
    })

    it('[SF] Matrícula sem seleção de disciplina - Com falha (campo obrigatório)', () => {
        const matricula = { ...novaMatricula, disciplinaId: undefined }
        cy.fillMatriculaForm(matricula)         
        cy.submitMatriculaForm()

        cy.contains('Seleção da disciplina é obrigatória').should('be.visible')
    })

    it('[SF] Matrícula com dados válidos - Com sucesso', () => {
        cy.fillMatriculaForm(novaMatricula)           
        cy.submitMatriculaForm()

    })

        it('[SF] Matrícula duplicada em disciplina - Com falha', () => {
        cy.fillMatriculaForm(novaMatricula)           
        cy.submitMatriculaForm()
        
        cy.navigateToMatriculaCadastro()
        
        cy.fillMatriculaForm(novaMatricula)           
        cy.submitMatriculaForm()
        
        cy.contains('Aluno já está matriculado nesta disciplina').should('be.visible')
    })

})
