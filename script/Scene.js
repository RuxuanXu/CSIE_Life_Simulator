import renderer from './Renderer.js';
import viewElement from './ViewElement.js';

class Scene {

    constructor() {

        //Private Members
        var viewElements = [];
        var fixedElements = [];
        var div = [];
        var fixedDiv = [];
        var showPopup = 0;

        //Public Methods
        this.setView = function() {
            return 0;
            //declare after create object
        }

        this.setFixed = function() {
            return 0;
            //declare after create object
        }
        this.getPopup = function() {
            return showPopup;
        }

        this.setPopup = function(n) {
            //random setting
            showPopup = n;
        }

        this.updateElements = function() {
            viewElements = [];
            this.setView();
        }

        this.updateFixed = function() {
            fixedElements = [];
            this.setFixed();
        }

        this.addElement = function(obj) {
            viewElements.push(obj);
            div.push(0);
        }

        this.addFixed = function(obj) {
            fixedElements.push(obj);
            fixedDiv.push(0);
        }

        this.changeScene = function() {
            renderer.clearPage();
            div = [];
            fixedDiv = [];
        }

        this.renderFixed = function() {
            this.updateFixed();
            for (var i in fixedElements) {
                if (!fixedDiv[i]) fixedDiv[i] = renderer.drawElement(fixedDiv[i], fixedElements[i]);
                renderer.drawElement(fixedDiv[i], fixedElements[i]);
            }
        }

        this.renderScene = function() {
            this.updateElements();
            for (var i in viewElements) {
                div[i] = renderer.drawElement(div[i], viewElements[i]);
            }
            var rand = Math.floor((Math.random() * 500));
            if (rand == 1) showPopup = 1;
            if (showPopup) {
                this.updateFixed();
                for (var i in fixedElements) {
                    if (!fixedDiv[i]) fixedDiv[i] = renderer.drawElement(fixedDiv[i], fixedElements[i]);
                    renderer.drawElement(fixedDiv[i], fixedElements[i]);
                }
                showPopup = 0;
            }
        }
    }
}

//Adding new Scene
var lifeSce = new Scene();
lifeSce.setFixed = function() {
    lifeSce.addFixed(viewElement.gameChoice());
    lifeSce.addFixed(viewElement.sceneChoice());
    lifeSce.addFixed(viewElement.missionList());
    if (this.getPopup()) lifeSce.addFixed(viewElement.popup());
}
lifeSce.setView = function() {
    lifeSce.addElement(viewElement.gameInfo());
}

var skillSce = new Scene();
skillSce.setFixed = function() {
    skillSce.addFixed(viewElement.gameChoice());
    skillSce.addFixed(viewElement.sceneChoice());
    skillSce.addFixed(viewElement.skillList());
    if (this.getPopup()) skillSce.addFixed(viewElement.popup());
}

skillSce.setView = function() {
    skillSce.addElement(viewElement.gameInfo());
}

var shopSce = new Scene();
shopSce.setFixed = function() {
    shopSce.addFixed(viewElement.gameChoice());
    shopSce.addFixed(viewElement.sceneChoice());
    shopSce.addFixed(viewElement.itemList());
    if (this.getPopup()) shopSce.addFixed(viewElement.popup());
};

shopSce.setView = function() {
    shopSce.addElement(viewElement.gameInfo());
};

var testSce = new Scene();
testSce.setFixed = function() {
    testSce.addFixed(viewElement.quest());
}
testSce.setView = function() {
    testSce.addElement(viewElement.ansProgress(1));
}

var resultSce = new Scene();
resultSce.setFixed = function() {
    resultSce.addFixed(viewElement.result());
}

var saveSce = new Scene();
saveSce.setFixed = function() {
    saveSce.addFixed(viewElement.saveBox());
}

var loadSce = new Scene();
loadSce.setFixed = function() {
    loadSce.addFixed(viewElement.loadBox());
}


var recordSce = new Scene();
recordSce.setFixed = function() {
    document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="./theme/leaderboard.css" />';
    document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans" />';
    recordSce.addFixed(viewElement.recordList());
    recordSce.addFixed(viewElement.returnUrl());
}

var sceneList = [lifeSce, skillSce, shopSce, testSce, resultSce, saveSce, loadSce, recordSce];
export default sceneList;
