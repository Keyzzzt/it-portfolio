import s from './singleSkill.module.scss'
import React from "react";

type SkillType = {
    imageUrl: string
    skillName: string
    description: string
}
export type SkillsList = {
    skillsList: SkillType[]
}

export const SingleSkill = (props: SkillsList) => {
    return (
        <>
            {props.skillsList.map((el, i) => (
                <li className={s.skillItem} key={i}>
                    <div className={s.image}>
                        <img src={el.imageUrl} alt="img"/>
                    </div>
                    <div className={s.title}>{el.skillName}</div>
                    <div className={s.description}>{el.description}</div>
                </li>
            ))}
        </>

    );
};
