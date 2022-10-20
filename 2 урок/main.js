"use strict";

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image:'./img/notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, image:'./img/mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, image:'./img/key.jpg'},
            {id: 4, title: 'Gamepad', price: 50, image:'./img/gamepad.jpg'},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
//              block.innerHTML += item.render();
        }
    }
    getSum(){
        let s =0;
        this.goods.forEach(item=> {
            s += item.price;
        })
        console.log(s);
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.getSum();
class basket {
    removeGood(){

    }
    addGood(){

    }
    changeGood(){

    }
    render(){

    }
}
class ElBasket {
    render(item){

    }
}




//const products = [
 //   {id: 1, title: 'Notebook', price: 2000, image:'./img/notebook.jpg'},
   // {id: 2, title: 'Mouse', price: 20, image:'./img/mouse.jpg'},
  //  {id: 3, title: 'Keyboard', price: 200, image:'./img/key.jpg'},
  //  {id: 4, title: 'Gamepad', price: 50, image:'./img/gamepad.jpg'},
//];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
//const renderProduct = item => {
  //  return `<div class="product-item">
            //    <img src="${item.image}" alt="">
            //    <h3>${item.title}</h3>
            //    <p>${item.price}</p>
            //    <button class="buy-btn">Купить</button>
          //  </div>`
//};
//const renderPage = list => {
    //const productsList = list.map(item => renderProduct(item));
  //  document.querySelector('.products').innerHTML = productsList.join('');
//};

//renderPage(products);