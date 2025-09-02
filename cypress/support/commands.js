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

Cypress.Commands.add('navigateToDisciplinaCadastro', () => {
  cy.get('#menu-disciplinas').click()       
  cy.get('#tab-create').click() 
})

Cypress.Commands.add('fillDisciplinaForm', (disciplina) => {
  if (disciplina.nome) cy.get('#nome').clear().type(disciplina.nome)
  if (disciplina.codigo) cy.get('#codigo').clear().type(disciplina.codigo)
  if (disciplina.professorId !== undefined) cy.get('#professorId').select(disciplina.professorId)
})

Cypress.Commands.add('submitDisciplinaForm', () => {
  cy.get('#btn-cadastrar').click()
})

Cypress.Commands.add('navigateToMatriculaCadastro', () => {
  cy.get('#menu-matriculas').click()       
  cy.get('#tab-create').click() 
})

Cypress.Commands.add('fillMatriculaForm', (matricula) => {
  if (matricula.alunoId !== undefined) cy.get('#alunoId').select(matricula.alunoId)
  if (matricula.disciplinaId !== undefined) cy.get('#disciplinaId').select(matricula.disciplinaId)
})

Cypress.Commands.add('submitMatriculaForm', () => {
  cy.get('#btn-cadastrar').click()
})

Cypress.Commands.add('searchMatriculaById', (id) => {
  cy.get('#searchId').clear().type(id)
  cy.get('#btn-buscar').click()
})

