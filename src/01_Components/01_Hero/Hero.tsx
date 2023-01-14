//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import s from './hero.module.scss';
import globalStyles from "../../02_Styles/global.module.scss";



type HeroProps = {
    line1: string
    line2: string
    name: string
    stack: string[]
}

export const Hero = (props: HeroProps) => {
    return (
        <section className={s.heroSection} id='hero'>
            <div className={globalStyles.container + ' ' + s.container}>
                <div className={s.heroInfo}>
                    <div className={s.line1}>{props.line1}</div>
                    <div className={s.line2}>{props.line2}</div>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    
                    <TypeWriterEffect
                        textStyle={{
                            fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={props.stack}
                        multiTextDelay={1000}
                        multiTextLoop
                        typeSpeed={30}
                    />
                </div>
                <div className={s.heroImage}></div>
            </div>
        </section>
    );
};
