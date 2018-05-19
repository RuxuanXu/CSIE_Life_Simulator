import skillManager from './SkillManager.js';
import stateManager from './StateManager.js';
import sceneManager from './SceneManager.js';

class Player {

    constructor() {

        //Make sure there's only one object.
        if (!Player.instance) {
            Player.instance = this;
        }
        return Player.instance;

    }

}

const player = new Player();
Object.freeze(player);