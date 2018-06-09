import player from './Player.js';
import { lifeSce, skillSce, shopSce, testSce, resultSce } from './Scene.js';
import webStorage from './WebStorage.js';

class SceneManager {

    constructor() {

        //Private Members
        var scenes = [];
        var location = 0;
        var changeScene = 0;
        var style = 0;

        //Private Methods

        var callScene = function(idx) {
            return scenes[idx];
        }

        //Public Methods
        this.getStyle = function() {
            return style;
        }

        this.getScene = function(idx) {
            return scenes[idx];
        }

        this.setStyle = function(n) {
            style = n;
            webStorage.storeCache('style', style);
        }

        this.getLocation = function() {
            return location;
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
            if (style == 0) {
                document.getElementById("style").href = "theme/style.css";
            } else {
                document.getElementById("style").href = "theme/dark_style.css";
            }
            location = n;
            changeScene = 0;
        }

        //Make sure there's only one object.
        if (!SceneManager.instance) {
            SceneManager.instance = this;

            var temp = parseInt(webStorage.getCache('style'));
            if (temp) style = temp;

            //Declare all scenes here
            scenes[0] = lifeSce;
            scenes[1] = skillSce;
            scenes[2] = shopSce;
            scenes[3] = testSce;
            scenes[4] = resultSce;
        }
        return SceneManager.instance;
    }

}

const sceneManager = new SceneManager();
Object.freeze(sceneManager);
sceneManager.updateLocation(sceneManager.getLocation());

export default sceneManager;