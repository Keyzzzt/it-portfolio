//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import s from './hero.module.scss';
import React, {FC} from "react";

type HeroProps = {
    greeting: string
    name: string
    stack: string[]
}

export const Hero: FC<HeroProps> = ({greeting, name, stack}) => {
    return (
        <section className='section' id='hero'>
            <div className={`container ${s.localContainer}`}>
                <div className={s.heroInfo}>
                    <p>{greeting}</p>
                    <h2 className={s.name}>{name}</h2>
                    
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
                <div className={s.heroImage}>
                    weqloihfiqe vg;ieqb vgh;eoiqnvg;e iuhvgrieuhr gviuhewrgivhi guuvbg;qiuh
                    {/*<img src="./photo.jpg" alt="photo"/>*/}
                </div>
            </div>
        </section>
    );
};
