/// <reference types="Cypress" />

function getTestElement(selector) {
  return cy.get(`[data-testid="${selector}"]`);
}

const buttonTexts = [/models/i, /colors/i, /accessories/i, /summary/i];

const pageNames = [
  "ModelPicker",
  "ColorPicker",
  "AccessoriesPicker",
  "Summary",
];

describe("navigation [Desktop]", () => {
  beforeEach(() => {
    cy.viewport(1024, 760);
    cy.visit("http://localhost:3000/");
  });

  describe("footer", () => {
    it("should navigate forward using forward button", () => {
      buttonTexts.slice(1).forEach((text) => {
        // click footer's forward button
        getTestElement("WizardFooter__container").contains(text).click();
      });
    });

    it("should hide back button when in models page", () => {
      getTestElement("WizardFooter__button__back").should("not.exist");
    });

    it("should navigate back using back button", () => {
      // go to last page
      getTestElement("WizardHeader__links__container")
        .contains(/summary/i)
        .click();

      // go back 1 page at a time
      buttonTexts
        .slice(0, 3)
        .reverse()
        .forEach((text) => {
          getTestElement("WizardFooter__container").contains(text);
          getTestElement("WizardFooter__button__back").click();
          getTestElement("WizardFooter__container").not().contains(text);
        });
    });
  });

  describe("header", () => {
    it("has one link for each page", () => {
      buttonTexts.forEach((text) => {
        getTestElement("WizardHeader__links__container").contains(text);
      });
    });

    it("highlights only current page tab", () => {
      buttonTexts.forEach((selectedText) => {
        // navigate to a page
        getTestElement("WizardHeader__links__container")
          .contains(selectedText)
          .click();

        // check only current one is selected
        buttonTexts.forEach((text) => {
          getTestElement("WizardHeader__links__container")
            .contains(text)
            .invoke("attr", "data-selected")
            .should("equal", String(text === selectedText));
        });
      });
    });

    it("shows corresponding page when navigating to it", () => {
      buttonTexts.forEach((text, index) => {
        getTestElement("WizardHeader__links__container").contains(text).click();
        getTestElement(`${pageNames[index]}__container`);
      });
    });
  });
});
