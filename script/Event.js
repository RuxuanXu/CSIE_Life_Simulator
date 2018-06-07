import sceneManager from './SceneManager.js';

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

var lifeEvt = new Event("life");
lifeEvt.execute = function() {
    if (sceneManager.getLocation() != 0) sceneManager.updateLocation(0);
}

var skillEvt = new Event("skill");
skillEvt.execute = function() {
    if (sceneManager.getLocation() != 1) sceneManager.updateLocation(1);
}

var shopEvt = new Event("shop");
shopEvt.execute = function() {}

export { lifeEvt, skillEvt, shopEvt };