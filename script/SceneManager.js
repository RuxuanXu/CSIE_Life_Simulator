import webStorage from './WebStorage.js';
import player from './Player.js';
import testScene from './Scene.js';

class SceneManager {

    constructor() {

        //Private Members
        var scenes = [];
        var location = 0;
        var currentTime = new Date();

        //Private Methods
        var callScene = function(idx) {
            return scenes[idx];
        }

        //Public Methods
        this.getLocation = function() {
            return location;
        }

        this.getCurrentTime = function(){
            return currentTime;
        }

        this.renderScene = function() {
            scenes[location].renderScene();
        }

        this.changeScene = function(newLocation) {
            location = newLocation;
        }

        //Make sure there's only one object.
        if (!SceneManager.instance) {
            SceneManager.instance = this;

            //Declare all scenes here
            scenes[0] = testScene;
            
        }

        return SceneManager.instance;

    }

}

const sceneManager = new SceneManager();
Object.freeze(sceneManager);
export default sceneManager;