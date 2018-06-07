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
        var items = [];

        var addItem = function(obj) {
            items.push(obj);
        }

        //Public Methods
        this.getData = function() {
            var dataSet = { money: money, point: point, health: health };
            return dataSet;
        }
        this.getMissions = function() {
            return missionManager.getMissions();
        }

        this.getItems = function() {
            var list = [];
            for (var i in items) {
                list.push(items[i].getData().name);
            }
            return list;
        }

        this.getSkills = function() {
            return skillManager.getSkills();
        }

        this.getShopItems = function() {
            return shop.getItems();
        }

        this.buyShopItem = function(name) {
            var obj = shop.takeItem(name);
            addItem(obj);
            shop.removeItem(name);
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
export default player;