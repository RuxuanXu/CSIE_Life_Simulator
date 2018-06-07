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

        this.takeItem = function(name) {
            for (var i in items) {
                if (items[i].getData().name == name) {
                    return items[i];
                }
            }
        }

        this.removeItem = function(name) {
            for (var i in items) {
                var newList = [];
                if (items[i].getData().name != name) {
                    newList.push(items[i]);
                }
            }
            items = newList;
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