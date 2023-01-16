import s from './skills.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";
import {SingleSkill, SkillsList} from "./SingleSkill/SingleSkill";
import React, {FC} from "react";


export const Skills: FC<SkillsList> = ({skillsList}) => {
    return (
        <section className={s.sectionSkills} id='skills'>
            <h2 className={s.sectionTitle}>Skills</h2>
            <div className={globalStyles.container + ' ' + s.container}>
                <ul className={s.skillsWrapper}>
                    <SingleSkill skillsList={skillsList}/>
                </ul>
            </div>
        </section>
    )
}