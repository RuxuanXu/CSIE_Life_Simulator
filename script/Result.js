export default class Result {

    constructor(name, score) {

        //Private Members
        var name = name;
        var score = score;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name, score: score };
            return dataSet;
        }
    }
}
var result_1 = new Result('Jerry Wood', 315);
var result_2 = new Result('Brandon Barnes', 301);
var result_3 = new Result('Raymond Knight', 292);
var result_4 = new Result('Trevor McCormick', 245);
var result_5 = new Result('Andrew Fox', 203);

var resultList = [result_1, result_2, result_3, result_4, result_5];
export { resultList };
