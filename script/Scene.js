import renderer from './Renderer.js';
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
                renderer.drawElement(viewElements[i]);
            }

        }
    }
}

//Adding new Scene
var testScene = new Scene();
testScene.addElement(viewElement.playerStateBox());
testScene.addElement(viewElement.button("讀書", "read"));
export default testScene;