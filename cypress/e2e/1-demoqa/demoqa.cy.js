import { SelectablePage } from "../../pageObjects/selectablePage";

describe('Demoqa scenarios', () => {
    context('Visit Selectable page', () => {
         beforeEach(() => {
            SelectablePage.visit();
        });

        it('Grid with multiple selections active/not active', () => {
            SelectablePage.gridButton.click();
            for (let i = 1; i <= 8; i = i + 2) {
                SelectablePage.gridCell(i).click();
            }

            for (let i = 0; i <= 8; i++) {
                if (i % 2 === 1) {
                    SelectablePage.gridCell(i).should('have.class', 'active');
                } else {
                    SelectablePage.gridCell(i).should('not.have.class', 'active');
                }
            }
        });
    });
});