import { test, book, food } from './Item.js';
import Item from './Item.js';
import webStorage from './WebStorage.js';

class Shop {

    constructor() {

        //Private Members
        var items = [];

        //Private Methods
        var addItem = function(obj) {
            items.push(obj);
        };

        //Public Methods
        this.getItems = function() {
            var list = [];
            for (var i in items) {
                list.push(items[i].getData());
            }
            return list;
        }

        this.takeItem = function(name) {
            for (var i in items) {
                if (items[i].getData().name == name) {
                    return items[i];
                }
            }
        }

        this.removeItem = function(name) {
            var newList = [];
            for (var i in items) {
                if (items[i].getData().name != name) {
                    newList.push(items[i]);
                }
            }
            items = newList;

            //Save to webstorage
            var sav = [];
            for (var i in items) {
                sav.push(items[i].getData());
            }
            webStorage.storeCache('shopItem', JSON.stringify(sav));
        }

        //Make sure there's only one object.
        if (!Shop.instance) {
            Shop.instance = this;
            //var temp = webStorage.getCache('shopItem');
            var it = JSON.parse(JSON.parse(webStorage.getCache('shopItem')));
            if (it) {
                items = [];
                for (var i in it) {
                    var itName = it[i].name;
                    var itPrice = it[i].price;
                    if (itName) {
                        var obj = new Item(itName, itPrice);
                        addItem(obj);
                    }
                }
            } else {
                addItem(test);
                addItem(book);
                addItem(food);
            }
        }
        return Shop.instance;
    }

}

const shop = new Shop();
Object.freeze(shop);

export default shop;