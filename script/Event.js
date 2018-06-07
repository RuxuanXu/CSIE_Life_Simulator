import sceneManager from './SceneManager.js';

class Event {

    constructor(name) {

        //Private Members
        var name = name;

        //Public Methods
        this.runProgress = function(name) {
            var bar = document.getElementById(name);
            var width = 1;
            var id = setInterval(progress, 50);

            function progress() {
                if (width >= 100) {
                    bar.style.width = '0%';
                    clearInterval(id);
                } else {
                    width++;
                    bar.style.width = width + '%';
                }
            }
        }

        this.getData = function() {
            var dataSet = { name: name };
            return dataSet;
        }

        this.execute = function() {
            return 0;
            //declare after create object
        }

    }
}

var study = new Event("study");
study.execute = function() {
    study.runProgress("study");
}

var work = new Event("work");
work.execute = function() {
    work.runProgress("work");
}
var eat = new Event("eat");
eat.execute = function() {
    eat.runProgress("eat");
}
var sleep = new Event("sleep");
sleep.execute = function() {
    sleep.runProgress("sleep");
}

var lifeEvt = new Event("life");
lifeEvt.execute = function() {
    if (sceneManager.getLocation() != 0) sceneManager.updateLocation(0);
}

var skillEvt = new Event("skill");
skillEvt.execute = function() {
    if (sceneManager.getLocation() != 1) sceneManager.updateLocation(1);
}

var shopEvt = new Event("shop");
shopEvt.execute = function() {}

export { lifeEvt, skillEvt, shopEvt, study, work, eat, sleep };