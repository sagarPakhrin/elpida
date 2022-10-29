describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.findByText(/total products/i).should('exist');
  });
});
