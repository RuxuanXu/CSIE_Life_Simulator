class Quest {

    constructor(id, question, a, b, c, d, sol) {

        //Private Members
        var id = id;
        var sol = sol;
        var question = question;
        var answers = [a, b, c, d];

        //Public Methods
        this.getData = function() {
            var dataSet = { id: id, sol: sol, question: question, answers: answers };
            return dataSet;
        }
    }
}

var exampleQuestion = new Quest(0, "英文字母共有幾個?", "25", "26", "27", "28", 1);

export default exampleQuestion;