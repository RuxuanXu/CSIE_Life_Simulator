import { lifeEvt, skillEvt, shopEvt, study, work, eat } from './Event.js';

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
eventHandler.addEvent(lifeEvt);
eventHandler.addEvent(skillEvt);
eventHandler.addEvent(shopEvt);
eventHandler.addEvent(study);
eventHandler.addEvent(eat);
eventHandler.addEvent(work);

export default eventHandler;