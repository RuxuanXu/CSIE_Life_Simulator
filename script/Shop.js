import { book, food } from './Item.js';

class Shop {

    constructor() {

        //Private Members
        var items = [];

        //Private Methods

        //Public Methods
        this.getItems = function() {
            var list = [];
            for (var i in items) {
                list.push(items[i].getData());
            }
            return list;
        }

        this.addItem = function(obj) {
            items.push(obj);
        }

        //Make sure there's only one object.
        if (!Shop.instance) {
            Shop.instance = this;

        }

        return Shop.instance;

    }

}

const shop = new Shop();
Object.freeze(shop);
shop.addItem(book);
shop.addItem(food);

export default shop;