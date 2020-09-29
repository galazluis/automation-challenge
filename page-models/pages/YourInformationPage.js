import { Selector, t } from 'testcafe'

class YourInformationPage {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('h3').withAttribute('data-test','error')
    }

    async submitForm(firstName, lastName, postalCode){
        await t
            .typeText(this.firstNameField, firstName, { paste:true })
            .typeText(this.lastNameField, lastName, { paste:true })
            .typeText(this.postalCodeField, postalCode, { paste:true })
            .click(this.continueButton)
    }
}

export default new YourInformationPage()