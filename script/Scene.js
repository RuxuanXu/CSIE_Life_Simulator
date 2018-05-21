import textRenderer from './TextRenderer.js';
import viewElement from './ViewElement.js';

class Scene {

    constructor() {

        //Private Members
        var viewElements = [];

        //Public Methods
        this.addElement = function(obj) {
            viewElements.push(obj);
        }

        this.renderScene = function() {

            for (var i in viewElements) {
                textRenderer.drawElement(viewElements[i]);
            }

        }
    }
}

class TestScene extends Scene {

    constructor() {

        //setting
        if (!TestScene.instance) {

            super(); //call parent class
            this.addElement(viewElement.playerStateBox());
            this.addElement(viewElement.readingButton());

        }

        return TestScene.instance;
    }
}

const testScene = new TestScene();
export default testScene;