class Mission {

    constructor(name, funcName) {

        //Private Members
        var name = name;
        var funcName = funcName;
        var progress = 0;
        var speed = 1;
        var isActive = 0;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, funcName: funcName, progress: progress, speed: speed, isActive: isActive };
            return dataSet;
        }
    }
}

var study = new Mission('學習', "study");
var work = new Mission('工作', "work");
var eat = new Mission('吃飯', "eat");
var sleep = new Mission('睡覺', "sleep");

export { study, work, eat, sleep };