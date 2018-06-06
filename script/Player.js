import skillManager from './SkillManager.js';
import webStorage from './WebStorage.js';

class Player {

    constructor() {

        //Private Members
        var money = 5000;
        var health = 100;
        var point = 0;
        var missions = [];
        var items = [];

        //Public Methods
        this.getData = function() {
            var dataSet = { money: money, point: point, health: health, missions: missions };
            return dataSet;
        }

        this.getSkill = function() {
            return skillManager.getSkill();
        }

        this.addMoney = function(amount) {
            money += amount;
            webStorage.storeCache('money', money);
        }

        this.addHealth = function(amount) {
            health += amount;
            webStorage.storeCache('health', health);
        }

        this.addMission = function(mission) {
            missions.push(mission);
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
player.addMission("上學");
player.addMission("工作");
player.addMission("吃飯");
player.addMission("睡覺");

export default player;