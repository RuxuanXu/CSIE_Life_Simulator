import textRenderer from './TextRenderer.js';

class SceneManager {

    constructor() {

        //Private Members
        var location = 0;

        //Public Methods
        this.getLocation = function() {
            return location;
        };

        //Make sure there's only one object.
        if (!SceneManager.instance) {
            SceneManager.instance = this;
        }
        return SceneManager.instance;
    }

}

const sceneManager = new SceneManager();
Object.freeze(sceneManager);

export default sceneManager;