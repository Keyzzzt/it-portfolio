import s from './skills.module.scss'
import {ItemCard, ItemsList} from "../999_Chunks/ItemCard/ItemCard";
import React, {FC} from "react";


export const Skills: FC<ItemsList> = ({items}) => {
    return (
        <section className='section' id='skills'>
            <div className={`container ${s.localContainer}`}>
                <h2 className='sectionTitle'>Skills</h2>
                <ul className='row'>
                    <ItemCard items={items}/>
                </ul>
            </div>
        </section>
    )
}