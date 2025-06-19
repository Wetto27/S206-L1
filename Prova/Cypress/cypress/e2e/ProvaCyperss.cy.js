describe("Prova Cypress", ()=>{

    let nome = generateName();

    it('Teste de login com sucesso', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });

    it('Teste de login com falha', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type(nome);
      cy.get('#password').type('senhainvalida');
      cy.get('.radius').click();
      cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });

    it('Teste de logout com sucesso', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      cy.get('.icon-2x.icon-signout').click();
      cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });

    
});

function generateName() {
    let hour = new Date().getHours().toString();
    let minute = new Date().getMinutes().toString();
    let second = new Date().getSeconds().toString();
    let name = hour + minute + second;

    return name;
}