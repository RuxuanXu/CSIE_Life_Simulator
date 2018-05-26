import skillManager from './SkillManager.js';
import webStorage from './WebStorage.js';

class Player {

    constructor() {

        //Private Members
        var money = 5000;
        var health = 100;

        //Public Methods
        this.getData = function() {
            var dataSet = { money: money, health: health };
            return dataSet;
        }
        this.addMoney = function(amount) {
            money += amount;
            webStorage.storeCache('money', money);
        }
        this.addHealth = function(amount) {
            health += amount;
            webStorage.storeCache('health', health);
        }

        //Make sure there's only one object.
        if (!Player.instance) {

            Player.instance = this;

            //load data from cache
            var m = parseInt(webStorage.getCache('money'));
            var h = parseInt(webStorage.getCache('health'));
            if (m) money = m;
            if (h) health = h;

        }
        return Player.instance;
    }

}

const player = new Player();
Object.freeze(player);

export default player;