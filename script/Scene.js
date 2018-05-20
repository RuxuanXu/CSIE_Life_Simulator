import textRenderer from './TextRenderer.js';
import viewElement from './ViewElement.js';

class Scene {

    constructor() {

        //Private Members
        var textElements = [];
        var buttonElements = [];

        //Public Methods
        this.addElement = function(obj) {

            for (var key in obj) {

                if (key == "text") {
                    textElements.push(obj[key]);
                }

                if (key == "btn") {
                    buttonElements.push(obj[key]);
                }

            }
        }

        this.renderScene = function() {

            for (var i in textElements) {
                textRenderer.drawText(textElements[i]);
            }

            for (var i in buttonElements) {
                textRenderer.drawButton(buttonElements[i]);
            }
        }

    }
}

class TestScene extends Scene {

    constructor() {

        //setting
        if (!TestScene.instance) {

            super();

            this.addElement(viewElement.playerStateBox());
            this.addElement(viewElement.readingButton());

        }

        return TestScene.instance;
    }
}

const testScene = new TestScene();
export default testScene;