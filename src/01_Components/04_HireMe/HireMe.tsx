import s from './hireMe.module.scss'
import {FC} from "react";


export const HireMe: FC = () => {
    return (
        <section className='section' id='hireme'>
            <div className={`container ${s.localContainer}`}>
            <h2 className='sectionTitle'>Looking for a fully remote job as well.</h2>
                <input type="button" className='commonBtn' value='Hire Me'/>
            </div>
        </section>
    )
}