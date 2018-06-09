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
            showPopup = 0;
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
        }
    }
}

//Adding new Scene
var lifeSce = new Scene();
lifeSce.setFixed = function() {
    lifeSce.addFixed(viewElement.gameChoice());
    lifeSce.addFixed(viewElement.sceneChoice());
    lifeSce.addFixed(viewElement.missionList());
}
lifeSce.setView = function() {
    lifeSce.addElement(viewElement.gameInfo());
    if (this.getPopup()) lifeSce.addElement(viewElement.popup());
}

var skillSce = new Scene();
skillSce.setFixed = function() {
    skillSce.addFixed(viewElement.gameChoice());
    skillSce.addFixed(viewElement.sceneChoice());
    skillSce.addFixed(viewElement.skillList());
}

skillSce.setView = function() {
    skillSce.addElement(viewElement.gameInfo());
    if (this.getPopup()) skillSce.addElement(viewElement.popup());
}

var shopSce = new Scene();
shopSce.setFixed = function() {
    shopSce.addFixed(viewElement.gameChoice());
    shopSce.addFixed(viewElement.sceneChoice());
    shopSce.addFixed(viewElement.itemList());
};

shopSce.setView = function() {
    shopSce.addElement(viewElement.gameInfo());
    if (this.getPopup()) shopSce.addElement(viewElement.popup());
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

export { lifeSce, skillSce, shopSce, testSce, resultSce };