import React, {FC, useEffect, useState} from "react";
import {useWindowSize} from "../../utils/useWindowSize";
import s from './header.module.scss'

type MenuItem = {
    type: string
    title?: string,
    class?: string
    link: string
}
type HeaderProps = {
    menuItems: MenuItem[]
}

export const Header: FC<HeaderProps> = ({menuItems}) =>  {
    const [menuOpen, setMenuOpen] = useState(false)
    const size = useWindowSize()

    useEffect(() => {
        if (size.width! > 992 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size, menuOpen])
    return (
        <header className={s.header}>
            <div className={`container ${s.localContainer}`}>
                <nav className={`${s.menu} ${menuOpen && size.width! < 992 ? s.isMenu : ''}`}>
                    <ul>
                        {menuItems.map((menuItem, i) => (
                            <li key={i}>
                                <a href={`#${menuItem.link}`} onClick={() => setMenuOpen(false)}>
                                    {menuItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={s.burgerMenu}>
                    {menuOpen ? (
                        <div className={s.burgerMenuIcon} onClick={() => setMenuOpen(false)}>
                            <i className="fa-solid fa-xmark" />
                        </div>
                    ) : (
                        <div onClick={() => setMenuOpen(true)} className={s.burgerMenuIcon}>
                            <i className="fa-solid fa-bars" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}