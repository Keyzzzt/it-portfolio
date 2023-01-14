import {useEffect, useState} from "react";
import {useWindowSize} from "../../utils/useWindowSize";
import s from './header.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";



type MenuItem = {
    type: string
    title?: string,
    class?: string
    link: string
}
type HeaderProps = {
    menuItems: MenuItem[]
}

export const Header = (props: HeaderProps) =>  {
    const [menuOpen, setMenuOpen] = useState(false)
    const size = useWindowSize()

    useEffect(() => {
        if (size.width! > 992 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size, menuOpen])
    return (
        <header className={s.header}>
            <div className={globalStyles.container + ' ' + s.container}>
                <nav className={`${s.menu} ${menuOpen && size.width! < 992 ? s.isMenu : ''}`}>
                    <ul>
                        {props.menuItems.map((menuItem, i) => (
                            <li>
                                <a href={`#${menuItem.link}`} onClick={() => setMenuOpen(false)}>
                                    {menuItem.type === 'title' ? menuItem.title : (<i className={menuItem.class} />)}
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