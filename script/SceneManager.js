import player from './Player.js';
import { lifeSce, skillSce, shopSce } from './Scene.js';

class SceneManager {

    constructor() {

        //Private Members
        var scenes = [];
        var location = 0;
        var currentTime = new Date();
        var changeScene = 0;

        //Private Methods
        var callScene = function(idx) {
            return scenes[idx];
        }

        //Public Methods
        this.getLocation = function() {
            return location;
        }

        this.getCurrentTime = function() {
            return currentTime;
        }

        this.renderScene = function() {
            if (!changeScene) {
                scenes[location].changeScene();
                scenes[location].renderFixed();
                changeScene = 1;
            }
            scenes[location].renderScene();
        }

        this.updateLocation = function(n) {
            location = n;
            changeScene = 0;
        }

        //Make sure there's only one object.
        if (!SceneManager.instance) {
            SceneManager.instance = this;

            //Declare all scenes here
            scenes[0] = lifeSce;
            scenes[1] = skillSce;
            scenes[2] = shopSce;
        }
        return SceneManager.instance;
    }

}

const sceneManager = new SceneManager();
Object.freeze(sceneManager);
export default sceneManager;