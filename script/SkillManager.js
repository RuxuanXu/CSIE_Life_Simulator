import { skillA1, skillB1, skillC1, skillD1 } from './Skill.js';

class SkillManager {

    constructor() {

        //Private Members
        var skills = [];

        //Public Methods
        this.getSkills = function() {
            var list = [];
            for (var i in skills) {
                list.push(skills[i].getData());
            }
            return list;
        }

        this.addSkill = function(obj) {
            skills.push(obj);
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
skillManager.addSkill(skillA1);
skillManager.addSkill(skillB1);
skillManager.addSkill(skillC1);
skillManager.addSkill(skillD1);

export default skillManager;