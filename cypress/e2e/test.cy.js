describe('login page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should successfully login', () => {
    cy.login('bropet@mail.ru', '123')

    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
    cy.contains('Log out').should('be.visible')
  })

  it('Should show error with empty login', () => {
    cy.login(null, '123')

    cy.get('#mail').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Should show error with empty password', () => {
    cy.login('bropet@mail.ru', null)

    cy.get('#pass').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})