import loginPage from '../page-models/pages/LoginPage'
import productsPage from '../page-models/pages/ProductsPage'
import header from '../page-models/components/Header'
import sidebarMenu from '../page-models/components/SiderbarMenu'
import { URLS, CREDENTIALS, PAGE_TITLES, ERROR_MESSAGES } from '../page-models/data/Constants'

fixture('Login feature testing').page `${URLS.LOGIN_URL}`

//This test covers scenario number 1
test('Users can log in using valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(productsPage.pageTitle.innerText).contains(PAGE_TITLES.PRODUCTS_PAGE)
})

//The following tests cover all the different combinations for scenario number 2
test('Users can\'t log in without entering a username and a password', async t => {
    await t
        .click(loginPage.loginButton)
        .expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.REQUIRED_USER)
})

test('Users can\'t log in using invalid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.INVALID_CREDENTIALS)
})

test('Users can\'t log in without entering a username', async t => {
    await t
        .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(loginPage.loginButton)
        .expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.REQUIRED_USER)
})

test('Users can\'t log in without entering a password', async t => {
    await t
        .typeText(loginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .click(loginPage.loginButton)
        .expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.REQUIRED_PASSWORD)
})

test('Users can\'t log in using an invalid username', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.INVALID_CREDENTIALS)
})

test('Users can\'t log in using an invalid password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.INVALID_CREDENTIALS)
})

test('Users cant\' log in using a locked out account', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.LOCKED_USER.USERNAME, CREDENTIALS.LOCKED_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.LOGIN_PAGE.LOCKED_USER)
})

//This test covers scenario number 3
test.before( async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(productsPage.pageTitle.innerText).contains(PAGE_TITLES.PRODUCTS_PAGE)
    })
('Users can log out using the sidebar menu', async t => {
    await t
        .click(header.burgerButton)
        .click(sidebarMenu.sidebarLogoutLink)
        .expect(loginPage.loginButton.exists).ok()
})