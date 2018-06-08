export default class Skill {

    constructor(name, effect, a, b, c) {

        //Private Members
        var name = name;
        var level = 0;
        var effect = effect;
        var cost = [a, b, c];

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, level: level, effect: effect, cost: cost };
            return dataSet;
        }
    }
}

var skillA1 = new Skill('智力的道路', '加快學習速度', 100, 1000, 8000);
var skillB1 = new Skill('體力的道路', '消耗體力減少', 100, 1000, 8000);
var skillC1 = new Skill('幸運的道路', '獲得金錢增加', 100, 1000, 8000);
var skillD1 = new Skill('邪惡的道路', '自動完成任務', 500, 5000, 40000);

export { skillA1, skillB1, skillC1, skillD1 };