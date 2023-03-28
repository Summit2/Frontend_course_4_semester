
export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render() 
    {
        // берем содержимое 
        const data = this.getData()
        data.forEach((item)=>{

        
        // добавляем в карточку данные        
        const html = this.getHTML(item)
        // выводим их
        this.parent.insertAdjacentHTML('beforeend', html)
    })
    }    
    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">зачем</button>
                    </div>
                </div>
            `
        )
    }
    // наши данные в отдельной функции
getData() 
{
    return [
        {
            id: 1,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы еще не видели 1"
        },
        {
            id: 2,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы еще не видели 2"
        },
        {
            id: 3,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы еще не видели 3"
        },
    ]
};
    
    
    
}



