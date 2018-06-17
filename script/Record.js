export default class Record {

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
var record_1 = new Record('Jerry Wood', 315);
var record_2 = new Record('Brandon Barnes', 301);
var record_3 = new Record('Raymond Knight', 292);
var record_4 = new Record('Trevor McCormick', 245);
var record_5 = new Record('Andrew Fox', 203);

var recordList = [record_1, record_2, record_3, record_4, record_5];
export { recordList };
