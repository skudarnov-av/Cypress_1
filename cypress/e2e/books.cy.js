describe("books list", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("bropet@mail.ru", "123");
    });
  
    it("Should successfully create new book", () => {
      cy.createBook("Властилин колец", "Великая книга", "Джон Рональд Руэл Толкин");
      cy.contains("Властилин колец").should("be.visible");
      cy.contains("Джон Рональд Руэл Толкин").should("be.visible");
    });
  
    it("Should add book to favorites", () => {
      cy.contains("Add to favorite").click();
      cy.get("h4").click();
      cy.contains("Властилин колец").should("be.visible");
      cy.contains("Джон Рональд Руэл Толкин").should("be.visible");
    });
  
    it("Should delete book from favorites", () => {
      cy.get("h4").click();
      cy.contains("Delete from favorite").click();
      cy.contains("Властилин колец").should("not.exist");
      cy.contains("Джон Рональд Руэл Толкин").should("not.exist");
    });
  });