const email = 'AleHar77338@stud.noroff.no'
const password = 'Am4M#9!xuHJ"wkt'

describe('Authenticates and logs in', () => {
  it('Pass authentication', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get(`#registerForm [data-auth="login"]`).contains('Login').should('exist').click()
    cy.wait(500)
    cy.get('input#loginEmail').type(email)
    cy.get('input#loginPassword').type(password)
    cy.get('#loginForm button').contains('Login').should('be.visible').click()
  })
})
