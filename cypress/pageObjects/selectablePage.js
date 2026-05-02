import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }

  static gridCell(element) {
    return cy.get(`.grid-container.mt-4#gridContainer > #row${Math.floor(element / 3) + 1} > li`).eq((element % 3));
  }
}