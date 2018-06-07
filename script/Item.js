class Item {

    constructor(name, price) {

        //Private Members
        var name = name;
        var price = price;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, price: price };
            return dataSet;
        }
    }
}

var book = new Item('微積分教科書', 2000);
var food = new Item('營養午餐', 100);

export { book, food };