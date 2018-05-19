class SkillManager {

    constructor() {

        //Make sure there's only one object.
        if (!SkillManager.instance) {
            this.data = 666;
            SkillManager.instance = this;
        }
        return SkillManager.instance;
    }

}

const skillManager = new SkillManager();
Object.freeze(skillManager);

export default skillManager;