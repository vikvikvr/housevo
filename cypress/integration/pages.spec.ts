/// <reference types="Cypress" />

function getTestElement(testId: string) {
  return cy.get(`[data-testid="${testId}"]`);
}

export {};

function getNthTestChild(index: number, testId: string) {
  return getTestElement(testId).children().eq(index);
}

describe("pages [Desktop]", () => {
  beforeEach(() => {
    cy.viewport(1024, 760);
    cy.visit("http://localhost:3000/");
  });

  describe("model", () => {
    it.skip("does not select a model by default", () => {});

    it("allows to select only one model at a time", () => {
      getTestElement("ModelPicker__container")
        .children("li")
        .then(($children) => {
          // click each model
          for (let i = 0; i < $children.length; i++) {
            getTestElement("ModelPicker__container")
              .children("li")
              .eq(i)
              .click();

            // verify that only selected model is checked
            for (let j = 0; j < $children.length; j++) {
              getTestElement("ModelPicker__container")
                .children("li")
                .eq(j)
                .invoke("attr", "data-checked")
                .should("equal", String(i == j));
            }
          }
        });
    });
  });

  describe("color", () => {
    it("allows to select only one color at a time", () => {
      // visit colors page
      getTestElement("WizardHeader__links__container")
        .contains(/colors/i)
        .click();

      getTestElement("ColorPicker__container")
        .children("ul")
        .children()
        .then(($children) => {
          // click each color
          for (let i = 0; i < $children.length; i++) {
            getTestElement("ColorPicker__container")
              .children("ul")
              .children("li")
              .eq(i)
              .click();

            // verify that only selected color is selected
            for (let j = 0; j < $children.length; j++) {
              getTestElement("ColorPicker__container")
                .children("ul")
                .children("li")
                .eq(j)
                .invoke("attr", "data-selected")
                .should("equal", String(i == j));
            }
          }
        });
    });
  });

  describe("accessories", () => {
    it("toggles each accessory", () => {
      // visit accessories page
      getTestElement("WizardHeader__links__container")
        .contains(/accessories/i)
        .click();

      getTestElement("AccessoriesPicker__container")
        .children()
        .then(($children) => {
          // click each accessory
          for (let i = 0; i < $children.length; i++) {
            getNthTestChild(i, "AccessoriesPicker__container")
              .invoke("attr", "data-checked")
              .should("equal", "false");

            getNthTestChild(i, "AccessoriesPicker__container").click();

            getNthTestChild(i, "AccessoriesPicker__container")
              .invoke("attr", "data-checked")
              .should("equal", "true");

            getNthTestChild(i, "AccessoriesPicker__container").click();

            getNthTestChild(i, "AccessoriesPicker__container")
              .invoke("attr", "data-checked")
              .should("equal", "false");
          }
        });
    });
  });
});
