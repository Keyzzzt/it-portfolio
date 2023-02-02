import s from './portfolio.module.scss'
import {ItemCard, ItemsList} from "../999_Chunks/ItemCard/ItemCard";
import React, {FC} from "react";


export const Portfolio: FC<ItemsList> = ({items}) => {
    return (
        <section className='section' id='portfolio'>
            <div className={`container ${s.localContainer}`}>
                <h2 className='sectionTitle'>Portfolio</h2>
                <ul className={`row ${s.portfolioRow}`}>
                    <ItemCard items={items} showBtn/>
                </ul>
            </div>
        </section>
    )
}