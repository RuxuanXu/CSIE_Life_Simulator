import player from './Player.js';

class Event {

    constructor(name) {

        //Private Members
        var name = name;

        //Public Methods
        this.getData = function() {
            var dataSet = { name: name };
            return dataSet;
        }

        this.execute = function() {
            return 0;
            //declare after create object
        }

    }
}

var workEvent = new Event("work");
workEvent.execute = function() {
    player.addMoney(10);
    player.addHealth(-1);
}

export default workEvent;