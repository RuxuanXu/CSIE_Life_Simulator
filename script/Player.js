import skillManager from './SkillManager.js';

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
        }
        this.addHealth = function(amount) {
            health += amount;
        }

        //Make sure there's only one object.
        if (!Player.instance) {
            Player.instance = this;
        }
        return Player.instance;

    }

}

const player = new Player();
Object.freeze(player);

export default player;