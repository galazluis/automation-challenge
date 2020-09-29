import { Selector } from 'testcafe'

class SidebarMenu {
    constructor(){
        this.sidebarLogoutLink = Selector('#logout_sidebar_link')
    }
}

export default new SidebarMenu()