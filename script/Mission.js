class Mission {

    constructor(name, funcName) {

        //Private Members
        var name = name;
        var funcName = funcName;
        var speed = 1;
        var isActive = 0;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, funcName: funcName, speed: speed, isActive: isActive };
            return dataSet;
        }
        this.setActive = function(n) {
            isActive = n;
        }

    }
}

var study = new Mission('學習', "study");
var work = new Mission('工作', "work");
var eat = new Mission('吃飯', "eat");

export { study, work, eat };