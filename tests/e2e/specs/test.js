// https://docs.cypress.io/api/introduction/api.html

describe("Route test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("List of Pokemons:");
  });

  it("Visits the ability url", () => {
    cy.visit("/#/abilities");
    cy.contains("List of Abilities:");
  });

  it("Visits the pokemons url", () => {
    cy.visit("/#/pokemons");
    cy.contains("List of Pokemons:");
  });
});
