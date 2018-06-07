import renderer from './Renderer.js';
import viewElement from './ViewElement.js';

class Scene {

    constructor() {

        //Private Members
        var viewElements = [];
        var fixedElements = [];
        var div = [];
        var fixedDiv = [];

        //Public Methods
        this.setView = function() {
            return 0;
            //declare after create object
        }

        this.setFixed = function() {
            return 0;
            //declare after create object
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
}

var skillSce = new Scene();
skillSce.setFixed = function() {
    skillSce.addFixed(viewElement.gameChoice());
    skillSce.addFixed(viewElement.sceneChoice());
    skillSce.addFixed(viewElement.skillList());
}

skillSce.setView = function() {
    skillSce.addElement(viewElement.gameInfo());
}

var shopSce = new Scene();
shopSce.setFixed = function() {
    shopSce.addFixed(viewElement.gameChoice());
    shopSce.addFixed(viewElement.sceneChoice());
    shopSce.addFixed(viewElement.itemList());
};

shopSce.setView = function() {
    shopSce.addElement(viewElement.gameInfo());
};

export { lifeSce, skillSce, shopSce };