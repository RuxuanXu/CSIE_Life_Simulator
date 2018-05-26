import player from './Player.js';

class Event {

    constructor(name) {

        //Private Members
        var name = name;

        //Public Methods
        this.getData = function(){
            var dataSet = {name: name};
            return dataSet;
        }

        this.execute = function(){
            return 0;
            //declare after create object
        }
        
    }
}

var testEvent = new Event("read");
testEvent.execute = function(){
    console.log("The button is triggered.");
}
export default testEvent;

