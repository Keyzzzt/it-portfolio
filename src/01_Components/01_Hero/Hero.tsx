//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import s from './hero.module.scss';
import globalStyles from "../../02_Styles/global.module.scss";
import {FC} from "react";

type HeroProps = {
    greeting: string
    name: string
    stack: string[]
}

export const Hero: FC<HeroProps> = ({greeting, name, stack}) => {
    return (
        <section className={s.heroSection} id='hero'>
            <div className={globalStyles.container + ' ' + s.container}>
                <div className={s.heroInfo}>
                    <div className={s.line1}>{greeting}</div>
                    <div className={s.name}>
                        {name}
                    </div>
                    
                    <TypeWriterEffect
                        textStyle={{
                            fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={stack}
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
