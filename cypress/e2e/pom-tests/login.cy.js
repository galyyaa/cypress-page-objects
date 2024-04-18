/// <reference types="cypress" />
import LoginPage from "../../page-objects/pages/LoginPage"

describe('Authorization test', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('userData.json').then((data) => {
            userData = data;
            LoginPage.open();
        })
    })

    it('Login with correct login and password', () => {
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword)
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })
})

