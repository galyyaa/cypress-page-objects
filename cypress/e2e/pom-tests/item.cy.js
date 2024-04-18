/// <reference types="cypress" />

import ItemPage from "../../page-objects/pages/ItemPage"

describe('Item tests', () => {
    beforeEach(() => {
        ItemPage.open();
    })

    it('Check that item page is opened', () => {
        ItemPage.clickImage.click();
        cy.url().should('include', 'inventory-item.html?id=4');
    })

    it('Check that all UI elements are enable on Item page', () => {
        ItemPage.clickImage.click();
        ItemPage.verifyUIElements();
      })

    it('After adding item to the cart should be "Remove" button', () => {
        ItemPage.clickImage.click();
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.should('be.visible');
    })

    it('After clicking on "Remove" button "Add to Cart" button should be displayed', () => {
        ItemPage.clickImage.click();
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.click();
})
})