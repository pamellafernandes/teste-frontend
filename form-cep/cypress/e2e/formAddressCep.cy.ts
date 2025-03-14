describe('FormAddressCep', () => {
  before(() => {
    cy.writeFile('src/data/addresses.json', '[]'); 
  });

  it('should fill and submit the form', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-title"]').should('contain', 'Formulário de Endereço');

    cy.get('[data-testid="cep-input"]').type('60165120', { delay: 100 });

    cy.get('[data-testid="street-input"]').should('have.value', 'Avenida Beira Mar');

    cy.get('[data-testid="complement-input"]').clear().type('Apto 1220');
    cy.get('[data-testid="number-input"]').clear().type('941'); 
    cy.get('[data-testid="district-input"]').clear().type('Meireles'); 
    cy.get('[data-testid="city-input"]').clear().type('Fortaleza'); 
    cy.get('[data-testid="state-input"]').clear().type('CE'); 

    cy.get('[data-testid="submit-button"]').click();

    cy.wait(1000);

   
    cy.readFile('src/data/addresses.json').then((data) => {
      expect(data[0]).to.deep.equal({
        zipCode: '60165-120',
        street: 'Avenida Beira Mar',
        number: '941',
        city: 'Fortaleza',
        state: 'CE',
        complement: '', 
        district: 'Meireles'
      });
    });
  });
});