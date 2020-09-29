import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    },
    LOCKED_USER:{
        USERNAME: process.env.LOCKED_USER,
        PASSWORD: process.env.PASSWORD
    }
}

export const USER_INFORMATION = {
    FIRST_NAME: process.env.FIRST_NAME,
    LAST_NAME: process.env.LAST_NAME,
    POSTAL_CODE: process.env.POSTAL_CODE
}

export const PAGE_TITLES = {
    PRODUCTS_PAGE: 'Products',
    YOUR_CART_PAGE: 'Your Cart',
    YOUR_INFORMATION_PAGE: 'Checkout: Your Information',
    CHECKOUT_PAGE: 'Checkout: Overview',
    FINISH_PAGE: 'Finish'
}

export const ERROR_MESSAGES = {
    LOGIN_PAGE:{
        INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service',
        REQUIRED_USER: 'Epic sadface: Username is required',
        REQUIRED_PASSWORD: 'Epic sadface: Password is required',
        LOCKED_USER: 'Epic sadface: Sorry, this user has been locked out'
    },
    YOUR_INFORMATION_PAGE:{
        REQUIRED_FIRST_NAME: 'Error: First Name is required',
        REQUIRED_LAST_NAME: 'Error: Last Name is required',
        REQUIRED_POSTAL_CODE: 'Error: Postal Code is required'
    }
}

export const ITEMS = [{
        NAME: 'Sauce Labs Bike Light',
        DESCRIPTION: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
        PRICE: '9.99'
    },
    {
        NAME: 'Sauce Labs Bolt T-Shirt',
        DESCRIPTION: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        PRICE: '15.99'
    },
    {
        NAME: 'Sauce Labs Onesie',
        DESCRIPTION: 'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
        PRICE: '7.99'
    },
    {
        NAME: 'Test.allTheThings() T-Shirt (Red)',
        DESCRIPTION: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
        PRICE: '15.99'
    },
    {
        NAME: 'Sauce Labs Backpack',
        DESCRIPTION: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        PRICE: '29.99'
    },
    {
        NAME: 'Sauce Labs Fleece Jacket',
        DESCRIPTION: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.',
        PRICE: '49.99'
    }
]

export const ITEMS_DATA = {
    MINIMUM_ITEMS : 1,
    MULTIPLE_ITEMS : 2,
    ALL_ITEMS : 6
}