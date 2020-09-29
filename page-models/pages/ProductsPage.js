import { Selector, t } from 'testcafe'
import { ITEMS } from '../data/Constants'

class ProductsPage {
    constructor(){
        //Selectors
        this.pageTitle = Selector('.product_label')
        this.itemContainer = Selector('.inventory_item')
        //CCS Selectors
        this.itemName = '.inventory_item_name'
        this.itemDescription= '.inventory_item_desc'
        this.itemPrice = '.inventory_item_price'
        this.addToCartButton = '.btn_primary.btn_inventory'
        this.removeButton = '.btn_secondary.btn_inventory'
    }

    async addItemsToCart(numberOfItems){
        //Adds the desired number of items to the cart. The limit of items is equal to the size of the ITEMS array.
        //Validates the add button disappears when clicked and the remove button appears instead
        for(let i = 0; i < numberOfItems; i++) {
            await t
                .click(this.itemContainer.withText(ITEMS[i].NAME).find(this.addToCartButton))
                .expect(this.itemContainer.withText(ITEMS[i].NAME).find(this.addToCartButton).exists).notOk()
                .expect(this.itemContainer.withText(ITEMS[i].NAME).find(this.removeButton).exists).ok()
          }
    }
}

export default new ProductsPage()