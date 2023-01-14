import s from './singleSkill.module.scss'

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
                <div className={s.wrapper} key={i}>
                    <div className={s.image}>
                        <img src={el.imageUrl} alt="img"/>
                    </div>
                    <div className={s.title}>{el.skillName}</div>
                    <div className={s.description}>{el.description}</div>
                </div>
            ))}
        </>

    );
};
