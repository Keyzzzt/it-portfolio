import s from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className='section'>
            <div className={`container ${s.localContainer}`}>
                <h2 className='sectionTitle'>Igor Akeljev</h2>
                <div className={s.socials}>
                    <div className={s.socialsItem}></div>
                    <div className={s.socialsItem}></div>
                    <div className={s.socialsItem}></div>
                    <div className={s.socialsItem}></div>
                </div>
                <div>&copy; Common!</div>
            </div>
        </footer>
    )
}