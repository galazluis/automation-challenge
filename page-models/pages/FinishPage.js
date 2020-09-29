import { Selector } from 'testcafe'

class FinishPage {
    constructor(){
        //Selectors
        this.pageTitle = Selector('.subheader')
    }
}

export default new FinishPage()