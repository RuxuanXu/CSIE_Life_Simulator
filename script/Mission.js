class Mission {

    constructor(name, funcName, description) {

        //Private Members
        var name = name;
        var funcName = funcName;
        var speed = 1;
        var isActive = 0;
        var description = description;

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

var study = new Mission('學習', "study", "體力-5 / 知識+10");
var work = new Mission('工作', "work", "體力-10 / 金錢+100");
var eat = new Mission('吃飯', "eat", "體力+20 / 金錢-80");

export { study, work, eat };