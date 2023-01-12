// @ts-ignore
import s from './about.module.scss'
import React from "react";

export const About = () => {
    return (
        <section className={s.about} id='about'>
            <pre>
                Здесь монтируем аккордион, с вкладками
                    Обо мне
                    Мои планы
                    и тд и тд
            </pre>
        </section>
    )
}