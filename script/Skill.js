class Skill {

    constructor(name) {

        //Private Members
        var name = name;
        var level = 0;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, level: level };
            return dataSet;
        }
    }
}

var skillA1 = new Skill('智力的道路');
var skillB1 = new Skill('體力的道路');
var skillC1 = new Skill('幸運的道路');
var skillD1 = new Skill('邪惡的道路');

export { skillA1, skillB1, skillC1, skillD1 };