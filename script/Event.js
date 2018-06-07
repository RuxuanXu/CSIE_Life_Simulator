import sceneManager from './SceneManager.js';
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
                    bar.style.width = '0%';
                    clearInterval(id);
                    self.afterProgress();
                } else {
                    width++;
                    bar.style.width = width + '%';
                }
            }
        }
    }
}

//Missions
var study = new Event("study");
study.execute = function() {
    study.runProgress("study");
};
study.afterProgress = function() {
    player.addHealth(-5);
    player.addPoint(10);
};
//---
var work = new Event("work");
work.execute = function() {
    work.runProgress("work");
};
work.afterProgress = function() {
    player.addHealth(-10);
    player.addMoney(100);
};
//---
var eat = new Event("eat");
eat.execute = function() {
    eat.runProgress("eat");
};
eat.afterProgress = function() {
    player.addHealth(20);
    if (player.getData().health > 100) {
        var diff = 100 - player.getData().health;
        player.addHealth(diff);
    }
    player.addMoney(-80);
};
//---
var sleep = new Event("sleep");
sleep.execute = function() {
    sleep.runProgress("sleep");
};
sleep.afterProgress = function() {
    player.addHealth(20);
    if (player.getData().health > 100) {
        var diff = 100 - player.getData().health;
        player.addHealth(diff);
    }
    //disable others
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

export { lifeEvt, skillEvt, shopEvt, study, work, eat, sleep };