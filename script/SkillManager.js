//import skill1 from './Skill.js';

class SkillManager {

    constructor() {

        //Private Members
        var allSkills = [];
        var skills = [];

        //Public Methods
        this.getSkill = function() {
            return skills;
        }

        this.addSkill = function() {

        }

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