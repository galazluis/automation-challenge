import { Selector, t } from 'testcafe'
import { ITEMS } from '../data/Constants'

class CheckoutPage {
    constructor(){
        //Selectors
        this.pageTitle = Selector('.subheader')
        this.itemContainer = Selector('.cart_item')
        this.finishButton = Selector('.btn_action.cart_button')
        //CCS Selectors
        this.itemName = '.inventory_item_name'
        this.itemDescription= '.inventory_item_desc'
        this.itemPrice = '.inventory_item_price'
    }

    async validateItemsInCart(numberOfItems){
        //First, it validates if the number of items in the cart matches the number of items added by the user.
        await t.expect(this.itemContainer.count).eql(numberOfItems)
        //After that, it validates that each item contains the right name, description, price.
        for(let i = 0; i < numberOfItems; i++) {
        //The reason why the assertions below are not aligned is because there's a known issue that raises some unwanted warnings in the reports (issue #5449)
            await t.expect(
                this.itemContainer.withText(ITEMS[i].NAME).find(this.itemDescription).innerText).contains(ITEMS[i].DESCRIPTION)
            await t.expect(
                this.itemContainer.withText(ITEMS[i].NAME).find(this.itemPrice).innerText).contains(ITEMS[i].PRICE)
          }
    }
}

export default new CheckoutPage()