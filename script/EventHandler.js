import testEvent from './Event.js';

class EventHandler {

    constructor() {

        //Private Members
        var events = [];

        //Public Methods
        this.addEvent = function(evt) {
            events.push(evt);
        }

        this.triggerEvent = function(name) {
            console.log(name,events);
            for (var i in events) {
                if(events[i].getData().name == name){
                    events[i].execute();
                }
            }
        }

        //Make sure there's only one object.
        if (!EventHandler.instance) {
            EventHandler.instance = this;
        }
        return EventHandler.instance;
    }

}

const eventHandler = new EventHandler();
Object.freeze(eventHandler);
eventHandler.addEvent(testEvent);

export default eventHandler;