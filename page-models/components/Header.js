import { Selector } from 'testcafe'

class Header {
    constructor(){
        this.burgerButton = Selector('.bm-burger-button')
        this.shoppingCartLink = Selector('.shopping_cart_link')
        this.shoppingCartBadge = Selector('.shopping_cart_badge')
    }
}

export default new Header()