class StateManager {

    constructor(money, health, sanity) {

        //Private Members
        var money = 5000;
        var health = 100;
        var sanity = 100;

        //Public Methods
        this.getSanity = function() {
            return sanity;
        };

        this.update = function(n) {
            sanity = n;
        };

        //Make sure there's only one object.
        if (!StateManager.instance) {
            StateManager.instance = this;
        }
        return StateManager.instance;
    }

}

const stateManager = new StateManager();
Object.freeze(stateManager);

export default stateManager;