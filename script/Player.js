import skillManager from './SkillManager.js';
import missionManager from './MissionManager.js';
import webStorage from './WebStorage.js';
import shop from './Shop.js';

class Player {

    constructor() {

        //Private Members
        var money = 5000;
        var health = 100;
        var point = 0;
        var shopItems = [];
        var items = [];

        //Public Methods
        this.getData = function() {
            var dataSet = { money: money, point: point, health: health };
            return dataSet;
        }
        this.getMissions = function() {
            return missionManager.getMissions();
        }

        this.getItems = function() {
            return items;
        }

        this.getShopItems = function() {
            return shop.getItems();
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

        this.addPoint = function(amount) {
            point += amount;
            webStorage.storeCache('point', point);
        }

        this.addItem = function(obj) {
            items.push(obj);
        }

        //Make sure there's only one object.
        if (!Player.instance) {

            Player.instance = this;
            //load data from cache
            var m = parseInt(webStorage.getCache('money'));
            var h = parseInt(webStorage.getCache('health'));
            var p = parseInt(webStorage.getCache('point'));
            if (m) money = m;
            if (h) health = h;
            if (p) point = p;

        }
        return Player.instance;
    }

}

const player = new Player();
Object.freeze(player);
player.addItem("書包");
export default player;