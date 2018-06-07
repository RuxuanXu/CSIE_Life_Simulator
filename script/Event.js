import sceneManager from './SceneManager.js';
import missionManager from './MissionManager.js';
import player from './Player.js';

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

        this.afterProgress = function() {
            return 0;
            //declare after create object
        }

        //For progress bar event
        this.runProgress = function(name) {
            var bar = document.getElementById(name);
            var width = 1;
            var id = setInterval(progress, 50);
            var self = this;

            function progress() {
                if (width >= 100) {
                    bar = document.getElementById(name);
                    if (bar) bar.style.width = '0%';
                    clearInterval(id);
                    self.afterProgress();
                } else {
                    bar = document.getElementById(name);
                    width++;
                    if (bar) bar.style.width = width + '%';
                }
            }
        }
    }
}

//Missions
var study = new Event("study");
study.execute = function() {
    if (!missionManager.isActive("study")) {
        missionManager.setActive("study", 1);
        study.runProgress("study");
    }
};
study.afterProgress = function() {
    missionManager.setActive("study", 0);
    player.addHealth(-5);
    player.addPoint(10);
};
//---
var work = new Event("work");
work.execute = function() {
    if (!missionManager.isActive("work")) {
        missionManager.setActive("work", 1);
        work.runProgress("work");
    }
};
work.afterProgress = function() {
    missionManager.setActive("work", 0);
    player.addHealth(-10);
    player.addMoney(100);
};
//---
var eat = new Event("eat");
eat.execute = function() {
    if (!missionManager.isActive("eat")) {
        missionManager.setActive("eat", 1);
        eat.runProgress("eat");
    }
};
eat.afterProgress = function() {
    missionManager.setActive("eat", 0);
    player.addHealth(20);
    if (player.getData().health > 100) {
        var diff = 100 - player.getData().health;
        player.addHealth(diff);
    }
    player.addMoney(-80);
};

//Scenes
var lifeEvt = new Event("life");
lifeEvt.execute = function() {
    if (sceneManager.getLocation() != 0) sceneManager.updateLocation(0);
}

var skillEvt = new Event("skill");
skillEvt.execute = function() {
    if (sceneManager.getLocation() != 1) sceneManager.updateLocation(1);
}

var shopEvt = new Event("shop");
shopEvt.execute = function() {
    if (sceneManager.getLocation() != 2) sceneManager.updateLocation(2);
}

//Shop
var trade = new Event("buy");
trade.execute = function() {
    var self = this;
    if (player.getData().money >= self.para2) {
        player.addMoney(-self.para2);
        player.buyShopItem(self.para1);
        sceneManager.updateLocation(2);
    }
}

export { lifeEvt, skillEvt, shopEvt, study, work, eat, trade };