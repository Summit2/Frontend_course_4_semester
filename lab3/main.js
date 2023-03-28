// импортировали собственный класс работы с карточками
import {ProductCardComponent} from "./components/product_cards/index.js";


// берем элемент из хтмл по индексу
const root = document.getElementById('root');

// создаем объект нашего карточного класса - главную страницу с карточками
const mainPage = new ProductCardComponent(root)


// рендерим этот объект
mainPage.render();

// clickCard(e) 
// {
//     const cardId = e.target.dataset.id
// };
// addListeners(data, listener) 
// {
//     document
//         .getElementById(`click-card-${data.id}`)
//         .addEventListener("click", listener)
// };

// render(data, listener) 
// {
//     const html = this.getHTML(data)
//     this.parent.insertAdjacentHTML('beforeend', html)
//     this.addListeners(data, listener)
// };
// const productCard = new ProductCardComponent(this.pageRoot)
// productCard.render(item, this.clickCard.bind(this))