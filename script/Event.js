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
        this.runProgress = function(name, para) {
            var bar = document.getElementById(name);
            var width = 1;
            var id = setInterval(progress, 50);
            var self = this;

            function progress() {
                if (width >= 100) {
                    bar = document.getElementById(name);
                    if (bar) bar.style.width = '0%';
                    clearInterval(id);
                    self.afterProgress(name, para);
                } else {
                    bar = document.getElementById(name);
                    width++;
                    if (bar) bar.style.width = width + '%';
                }
            }
        }

        this.updatePlayer = function(a, b, c) {
            player.addHealth(a);
            player.addPoint(b);
            player.addMoney(c);
        }
    }
}

//Missions
var doMission = new Event("doMission");
doMission.execute = function() {
    var self = this;
    var name = self.para1;
    var para = self.para2;
    if (!missionManager.isActive(name)) {
        missionManager.setActive(name, 1);
        doMission.runProgress(name, para);
    }
};

doMission.afterProgress = function(name, para) {
    missionManager.setActive(name, 0);
    player.addHealth(parseInt(para[0]));
    player.addPoint(parseInt(para[1]));
    player.addMoney(parseInt(para[2]));
}

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

//Menu Buttons
var changeStyle = new Event("light");
changeStyle.execute = function() {
    var style = sceneManager.getStyle();
    if (style == 0) {
        sceneManager.setStyle(1);
    } else {
        sceneManager.setStyle(0);
    }
    sceneManager.updateLocation(sceneManager.getLocation());
}

export { lifeEvt, skillEvt, shopEvt, doMission, trade, changeStyle };