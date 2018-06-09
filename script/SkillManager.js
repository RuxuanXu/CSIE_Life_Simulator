import { skillList } from './Skill.js';

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
for (var i in skillList) {
    skillManager.addSkill(skillList[i]);
}

export default skillManager;