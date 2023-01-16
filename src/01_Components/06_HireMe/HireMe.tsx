import s from './hireMe.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";
import {FC} from "react";

type HireMeProps = {}

export const HireMe: FC<HireMeProps> = ({}) => {
    return (
        <section className={s.HireMeSection} id='hireme'>
            <div className={s.sectionTitle}>Hire me</div>
            <div className={globalStyles.container + ' ' + s.container}>
            </div>
        </section>
    )
}