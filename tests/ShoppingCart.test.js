import loginPage from '../page-models/pages/LoginPage'
import header from '../page-models/components/Header'
import productsPage from '../page-models/pages/ProductsPage'
import shoppingCartPage from '../page-models/pages/ShoppingCartPage'
import { URLS, CREDENTIALS, PAGE_TITLES, ITEMS_DATA} from '../page-models/data/Constants'

fixture('Shopping Cart flow testing')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(productsPage.pageTitle.innerText).contains(PAGE_TITLES.PRODUCTS_PAGE)
    })

//This test covers scenario number 4
test('Users can navigate to the Shopping Cart page', async t => {
    await t
        .click(header.shoppingCartLink)
        .expect(shoppingCartPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_CART_PAGE)
})

//This test covers scenario number 5
test('Users can add a single item to their Shopping Cart', async t => {
    await productsPage.addItemsToCart(ITEMS_DATA.MINIMUM_ITEMS)
    await t
        .expect(header.shoppingCartBadge.innerText).eql(ITEMS_DATA.MINIMUM_ITEMS.toString())
        .click(header.shoppingCartLink)
        .expect(shoppingCartPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_CART_PAGE)
    await shoppingCartPage.validateItemsInCart(ITEMS_DATA.MINIMUM_ITEMS)
})

//This test covers scenario number 6
test('Users can add multiple items to their Shopping Cart', async t => {
    await productsPage.addItemsToCart(ITEMS_DATA.ALL_ITEMS)
    await t
        .expect(header.shoppingCartBadge.innerText).eql(ITEMS_DATA.ALL_ITEMS.toString())
        .click(header.shoppingCartLink)
        .expect(shoppingCartPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_CART_PAGE)
    await shoppingCartPage.validateItemsInCart(ITEMS_DATA.ALL_ITEMS)
})