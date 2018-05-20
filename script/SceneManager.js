import textRenderer from './TextRenderer.js';
import webStorage from './WebStorage.js';
import player from './Player.js';

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
        };

        this.render = function() {
            //Render Test
            textRenderer.drawText("玩家狀態\n");
            textRenderer.drawText(JSON.stringify(player.getData()));
            textRenderer.drawButton("讀書");
            textRenderer.drawButton("吃飯");
            textRenderer.drawButton("睡覺");
        }

        //Make sure there's only one object.
        if (!SceneManager.instance) {
            SceneManager.instance = this;
        }
        return SceneManager.instance;
    }

}

const sceneManager = new SceneManager();
Object.freeze(sceneManager);

sceneManager.render();