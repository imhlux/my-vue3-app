describe('Главная страница', () => {
  it('открывает страницу и проверяет заголовок', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Main Page');
  });
});