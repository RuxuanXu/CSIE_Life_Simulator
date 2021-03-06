import skillManager from './SkillManager.js';
import missionManager from './MissionManager.js';
import webStorage from './WebStorage.js';
import shop from './Shop.js';
import Item from './Item.js';

class Player {

    constructor() {

        //Private Members
        var money = 5000;
        var health = 100;
        var point = 0;
        var items = [];
        var skills = [];
        var answers = [];

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
            //Save to webstorage
            var sav = [];
            for (var i in items) {
                sav.push(items[i].getData());
            }
            webStorage.storeCache('item', JSON.stringify(sav));
        }

        this.getSkill = function() {
            console.log(skillManager.getSkills());
            return skillManager.getSkills();
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
        this.addLevel = function(name){
            skillManager.addLevel(name);
        }
        this.getAnswer = function() {
            return answers;
        }

        this.addAnswer = function(ans) {
            answers.push(ans);
        }

        //Make sure there's only one object.
        if (!Player.instance) {

            Player.instance = this;

            //load data from cache
            var m = parseInt(webStorage.getCache('money'));
            var h = parseInt(webStorage.getCache('health'));
            var p = parseInt(webStorage.getCache('point'));
            var it = JSON.parse(JSON.parse(webStorage.getCache('item')));
            if (m) money = m;
            if (h) health = h;
            if (p) point = p;
            if (it) {
                for (var i in it) {
                    var itName = it[i].name;
                    var itPrice = it[i].price;
                    if (itName) {
                        var obj = new Item(itName, itPrice);
                        addItem(obj);
                    }
                }
            }

        }
        return Player.instance;
    }

}

const player = new Player();
Object.freeze(player);
export default player;