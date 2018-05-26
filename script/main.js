import sceneManager from './SceneManager.js';

function mainLoop(){
    sceneManager.renderScene();
}

setInterval(mainLoop,500);