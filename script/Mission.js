class Mission {

    constructor(name, funcName, a, b, c) {

        //Private Members
        var name = name;
        var funcName = funcName;
        var speed = 1;
        var isActive = 0;
        var description = [a, b, c];

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, funcName: funcName, speed: speed, isActive: isActive, description: description };
            return dataSet;
        }
        this.setActive = function(n) {
            isActive = n;
        }

    }
}

var study = new Mission('學習', "study", -5, 10, 0);
var work = new Mission('工作', "work", -10, 0, 100);
var eat = new Mission('吃飯', "eat", 20, 0, -80);

export { study, work, eat };