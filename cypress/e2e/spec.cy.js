describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.argosScreenshot("cypress-example-page", {
      viewports: [
        { width: 1920, height: 1080 },
        { width: 768, height: 1024 },
        { width: 390, height: 844 },
      ],
    });
  });
});
