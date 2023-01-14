import s from './footer.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";

export const Footer = () =>  {
    return (
        <footer className={s.footer}>
            <div className={globalStyles.container + ' ' + s.container}>
                <div className={s.sectionTitle}>Footer</div>
            </div>
        </footer>
    )
}