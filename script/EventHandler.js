class EventHandler {

    constructor() {

        //Private Members

        //Public Methods

        //Make sure there's only one object.
        if (!EventHandler.instance) {
            EventHandler.instance = this;
        }
        return EventHandler.instance;
    }

}

const eventHandler = new EventHandler();
Object.freeze(eventHandler);

export default eventHandler;