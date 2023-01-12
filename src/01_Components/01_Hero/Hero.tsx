import React from "react";
//@ts-ignore
import s from './hero.module.scss';
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
//@ts-ignore
// import foto from './../../img/foto.png'


type HeroProps = {
    subtitle: string
    name: string
    stack: string[]
}

export const Hero = (props: HeroProps) => {
    return (
        <section className={s.hero} id='hero'>
            <div className={s.container}>
                <div className={s.heroInfo}>
                    <div className={s.subtitle}>{props.subtitle}</div>
                    <div className={s.name}>{props.name}</div>
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
