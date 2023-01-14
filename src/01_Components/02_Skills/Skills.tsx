import s from './skills.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";
import {SingleSkill, SkillsList} from "../999_Chunks/SingleSkill/SingleSkill";
import React from "react";


export const Skills = (props: SkillsList) => {
    return (
        <section className={s.sectionSkills} id='skills'>
            <div className={globalStyles.container + ' ' + s.container}>
                <h2 className={s.sectionTitle}>Skills</h2>
                <div className={s.skillsWrapper}>
                    <SingleSkill skillsList={props.skillsList}/>
                </div>
            </div>
        </section>
    )
}