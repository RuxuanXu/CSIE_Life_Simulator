class SkillManager {

    constructor() {

        //Private Members

        //Public Methods

        //Make sure there's only one object.
        if (!SkillManager.instance) {
            SkillManager.instance = this;
        }
        return SkillManager.instance;
    }

}

const skillManager = new SkillManager();
Object.freeze(skillManager);

export default skillManager;