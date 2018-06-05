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
        this.update = function() {
            return 0;
            //declare after create object
        }

        this.updateElements = function() {
            viewElements = [];
            this.update();
        }

        this.addElement = function(obj) {
            viewElements.push(obj);
            div.push(0);
        }

        this.addFixed = function(obj) {
            fixedElements.push(obj);
            fixedDiv.push(0);
        }

        this.renderFixed = function() {
            for (var i in fixedElements) {
                if (!fixedDiv[i])
                    fixedDiv[i] = renderer.drawElement(fixedDiv[i], fixedElements[i]);
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
var home = new Scene();
home.addFixed(viewElement.gameChoice());
home.addFixed(viewElement.sceneChoice());
home.addFixed(viewElement.missionList());
home.update = function() {
    home.addElement(viewElement.gameInfo());
}

export default home;