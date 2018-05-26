import renderer from './Renderer.js';
import viewElement from './ViewElement.js';
import eventHandler from './EventHandler.js';

class Scene {

    constructor() {

        //Private Members
        var viewElements = [];
        var div = [];

        //Public Methods
        this.update = function(){
            return 0;
            //declare after create object
        }

        this.updateElements = function(){
            viewElements = [];
            this.update();
        }
        
        this.addElement = function(obj) {
            viewElements.push(obj);
            div.push(0);
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
var testScene = new Scene();
testScene.update = function(){
    testScene.addElement(viewElement.timeBox(new Date()));
    testScene.addElement(viewElement.playerStateBox());
    testScene.addElement(viewElement.button("讀書", "read"));
    testScene.addElement(viewElement.eventBox());
    var btn = document.getElementsByName("read").item(0);
    if(btn){
        btn.addEventListener("click", function(){ 
            eventHandler.triggerEvent("read"); 
        });
    }
}

export default testScene;


