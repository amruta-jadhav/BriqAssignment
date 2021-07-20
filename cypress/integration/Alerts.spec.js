/// <reference types="cypress" />

describe("Alerts", () => {
    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
    })

    it("Alerts-I am a JS Alert", function () {
        cy.get('ul>li>button').eq(0).click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it("Alerts-I am a JS Confirm-ok button", function () {
        cy.get('ul>li>button').eq(1).click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('I am a JS Confirm');
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it("Alerts-I am a JS Confirm-cancel button", function () {

        cy.get('ul>li>button').eq(1).click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('I am a JS Confirm');
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
})