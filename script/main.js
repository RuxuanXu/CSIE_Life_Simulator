import sceneManager from './SceneManager.js';
import eventHandler from './EventHandler.js';

eventHandler.addFuncToWindow();

function mainLoop() {
    sceneManager.renderScene();
}

setInterval(mainLoop, 20);