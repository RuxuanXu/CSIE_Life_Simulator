import sceneManager from './SceneManager.js';
import missionManager from './MissionManager.js';
import player from './Player.js';
import encoder from './Encoder.js';

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
            var id = setInterval(progress, 5);
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
    var hp = parseInt(para[0]);
    var point = parseInt(para[1]);
    var money = parseInt(para[2]);

    if (!missionManager.isActive(name) &&
        player.getData().health + hp >= 0 &&
        player.getData().point + point >= 0 &&
        player.getData().money + money >= 0) {
        missionManager.setActive(name, 1);
        doMission.runProgress(name, para);
    }
};

doMission.afterProgress = function(name, para) {
    missionManager.setActive(name, 0);
    var hp = parseInt(para[0]);
    var point = parseInt(para[1]);
    var money = parseInt(para[2]);

    player.addHealth(hp);
    if (player.getData().health > 100) {
        player.addHealth(100 - player.getData().health);
    }
    if (player.getData().health < 0) {
        player.addHealth(-player.getData().health);
    }
    player.addPoint(point);
    player.addMoney(money);
}

//Scenes
var goScene = new Event("goScene");
goScene.execute = function() {
    var self = this;
    if (sceneManager.getLocation() != self.para1) sceneManager.updateLocation(self.para1);
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

//Quest Events
var accept = new Event("accept");
accept.execute = function() {
    var self = this;
    if (self.para1) {
        sceneManager.updateLocation(3);
    } else {
        sceneManager.updateLocation(sceneManager.getLocation());
    }
}

var answer = new Event("answer");
answer.execute = function() {
    var self = this;
    var scene = sceneManager.getScene(sceneManager.getLocation());
    if (self.para1) {
        sceneManager.updateLocation(4);
        player.addAnswer(1);
    } else {
        sceneManager.updateLocation(4);
        player.addAnswer(0);
    }
}

var returnTo = new Event("return");
returnTo.execute = function() {
    sceneManager.updateLocation(0);
}

var leaderboard = new Event("rank");
leaderboard.execute = function() {
    window.location.href = "leaderboard.html";
}

//SL
var save = new Event("save");
save.execute = function() {
    sceneManager.updateLocation(5);
}

var load = new Event("load");
load.execute = function() {
    sceneManager.updateLocation(6);
}

var copy = new Event("copy");
copy.execute = function() {
    var copy = document.getElementById('save').innerHTML;

    var text = document.createElement("textarea");
    text.value = copy;
    document.body.appendChild(text);
    text.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.log('Copy Failed');
    }
    document.body.removeChild(text);
}

var upload = new Event("upload");
upload.execute = function() {
    var code = document.getElementById("load").value;
    var decode = encoder.decode(code);
    console.log(decode);
}

var eventList = [goScene, doMission, trade, changeStyle, accept, answer, returnTo, leaderboard, save, load, copy, upload];
export default eventList;