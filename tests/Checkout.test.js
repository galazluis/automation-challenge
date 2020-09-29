import loginPage from '../page-models/pages/LoginPage'
import header from '../page-models/components/Header'
import productsPage from '../page-models/pages/ProductsPage'
import shoppingCartPage from '../page-models/pages/ShoppingCartPage'
import yourInformationPage from '../page-models/pages/YourInformationPage'
import checkoutPage from '../page-models/pages/CheckoutPage'
import finishPage from '../page-models/pages/FinishPage'
import { URLS, CREDENTIALS, PAGE_TITLES, USER_INFORMATION, ERROR_MESSAGES, ITEMS_DATA } from '../page-models/data/Constants'

fixture('Checkout flow testing')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(productsPage.pageTitle.innerText).contains(PAGE_TITLES.PRODUCTS_PAGE)
        await productsPage.addItemsToCart(ITEMS_DATA.MULTIPLE_ITEMS)
        await t
            .expect(header.shoppingCartBadge.innerText).eql(ITEMS_DATA.MULTIPLE_ITEMS.toString())
            .click(header.shoppingCartLink)
            .expect(shoppingCartPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_CART_PAGE)
        await shoppingCartPage.validateItemsInCart(ITEMS_DATA.MULTIPLE_ITEMS)
    })

//The following tests cover scenario number 7
test('Users can\'t navigate to the Overview Page without providing a First Name', async t => {
    await t
        .click(shoppingCartPage.checkoutButton)
        .expect(yourInformationPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_INFORMATION_PAGE)
        .click(yourInformationPage.continueButton)
        .expect(yourInformationPage.errorMessage.innerText).contains(ERROR_MESSAGES.YOUR_INFORMATION_PAGE.REQUIRED_FIRST_NAME)
})

test('Users can\'t navigate to the Overview Page without providing a Last Name', async t => {
    await t
        .click(shoppingCartPage.checkoutButton)
        .expect(yourInformationPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_INFORMATION_PAGE)
        .typeText(yourInformationPage.firstNameField, USER_INFORMATION.FIRST_NAME)
        .click(yourInformationPage.continueButton)
        .expect(yourInformationPage.errorMessage.innerText).contains(ERROR_MESSAGES.YOUR_INFORMATION_PAGE.REQUIRED_LAST_NAME)
})

test('Users can\'t navigate to the Overview Page without providing a Postal Code', async t => {
    await t
        .click(shoppingCartPage.checkoutButton)
        .expect(yourInformationPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_INFORMATION_PAGE)
        .typeText(yourInformationPage.firstNameField, USER_INFORMATION.FIRST_NAME)
        .typeText(yourInformationPage.lastNameField, USER_INFORMATION.LAST_NAME)
        .click(yourInformationPage.continueButton)
        .expect(yourInformationPage.errorMessage.innerText).contains(ERROR_MESSAGES.YOUR_INFORMATION_PAGE.REQUIRED_POSTAL_CODE)
})

//This test covers scenarios number 8, 9 and 10
test('Users can complete a purchase after providing their personal info', async t => {
    await t
        .click(shoppingCartPage.checkoutButton)
        .expect(yourInformationPage.pageTitle.innerText).contains(PAGE_TITLES.YOUR_INFORMATION_PAGE)
    await yourInformationPage.submitForm(USER_INFORMATION.FIRST_NAME, USER_INFORMATION.LAST_NAME, USER_INFORMATION.POSTAL_CODE)
    await t.expect(checkoutPage.pageTitle.innerText).contains(PAGE_TITLES.CHECKOUT_PAGE)
    await checkoutPage.validateItemsInCart(ITEMS_DATA.MULTIPLE_ITEMS)
    await t
        .click(checkoutPage.finishButton)
        .expect(finishPage.pageTitle.innerText).contains(PAGE_TITLES.FINISH_PAGE)
})