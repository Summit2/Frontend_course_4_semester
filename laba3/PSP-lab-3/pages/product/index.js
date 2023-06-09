import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    
    constructor(parent, id) {
        this.parent = parent
        this.id = id 
    }

    getData() {
        
        return {
            
            id: 1,
            src: "Тюлень.jpg    ",
            title: `Вместо лекции в ${this.id}:00`,
            text: "Ты сидишь в технопарке со стаканчиком бесплатного кофе\nЖизнь прекрасна..."
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const product = new ProductComponent(this.pageRoot)
        product.render(data)
    }
}