import s from './itemCard.module.scss'
import React, {FC} from "react";

type itemType = {
    imageUrl: string
    title: string
    description: string
}
export type ItemsList = {
    items: itemType[]
    showBtn?: boolean

}

export const ItemCard: FC<ItemsList> = ({items, showBtn}) => {
    return (
        <>
            {items.map((el, i) => (
                <li className={s.skillItem} key={i}>
                    <div className={s.image}>
                        <img src={el.imageUrl} alt="img"/>
                        {showBtn && <input className={`commonBtn ${s.button}`} type="button" value='View'/>}
                    </div>
                    <div className={s.title}>{el.title}</div>
                    <div className={s.description}>{el.description}</div>

                </li>
            ))}
        </>

    );
};
