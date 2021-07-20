describe('file upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload', () => {
        let filepath = 'image/cypress.png'
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('cypress.png')
        cy.get('h3').should('have.text','File Uploaded!')
    })
})