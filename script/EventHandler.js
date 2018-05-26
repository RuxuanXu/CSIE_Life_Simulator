import workEvent from './Event.js';

class EventHandler {

    constructor() {

        //Private Members
        var events = [];

        //Public Methods
        this.addEvent = function(evt) {
            events.push(evt);
        }

        this.addFuncToWindow = function() {

            window.triggerEvent = function(name) {
                for (var i in events) {
                    if (events[i].getData().name == name) {
                        events[i].execute();
                    }
                }
            }
            return true;
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
eventHandler.addEvent(workEvent);

export default eventHandler;