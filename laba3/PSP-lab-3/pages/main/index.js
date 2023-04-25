
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        
        return [
            {
                id: 1,
                src: "Тюлень.jpg",
                title: "Кофе",
                text: "Такой кофе можно найти только в технопарке"
            },
            {
                id: 2,
                src: "Тюлень.jpg",
                title: "Кофе",
                text: "Такой кофе можно найти только в технопарке"
            },
            {
                id: 3,
                src: "Тюлень.jpg",
                title: "Кофе",
                text: "Такой кофе можно найти только в технопарке"
            },
        ]
    }

    clickCard(e) {
        const cardId = (e.target.dataset.id)
        
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}
