import s from './hireMe.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";


export const HireMe = () =>  {
    return (
        <section className={s.HireMeSection} id='hireme'>
            <div className={globalStyles.container + ' ' + s.container}>
                <div className={s.sectionTitle}>Hire me</div>
            </div>
        </section>
    )
}