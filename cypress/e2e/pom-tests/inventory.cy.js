/// <reference types="cypress" />
import InventoryPage from "../../page-objects/pages/InventoryPage"

describe('Inventory tests', () => {

    beforeEach(() => {
        InventoryPage.open();
    })

    it('Check that all UI elements are enable on Inventory page', () => {
        InventoryPage.verifyUIElements();
    })


    it('Check that in dropdown are available 4 options', () => {
        InventoryPage.dropdown.children('option').should('have.length', 4);
    });

    it('After click on cart icon should opens cart page', () => {
        InventoryPage.cartIcon.click();
        cy.url().should('include', '/cart.html');
    })

    it('Click on item by name', () => {
        InventoryPage.getItemByName('Sauce Labs Bike Light').click();
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Bike Light')
    })
})