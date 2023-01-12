import {useEffect, useState} from "react";
import {useWindowSize} from "../../utils/useWindowSize";
// @ts-ignore
import s from './header.module.scss'

export const Header = () =>  {
    const [menuOpen, setMenuOpen] = useState(false)
    const size = useWindowSize()

    useEffect(() => {
        if (size.width! > 992 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size, menuOpen])
    return (
        <header className={s.header}>
            <div className={s.content}>
                <nav className={`${s.menu} ${menuOpen && size.width! < 992 ? s.isMenu : ''}`}>
                    <ul>
                        <li>
                            <a href='#skills' onClick={() => setMenuOpen(false)}>
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => setMenuOpen(false)}>
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                                PORTFOLIO
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setMenuOpen(false)}>
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#hireme" onClick={() => setMenuOpen(false)}>
                                HIRE ME
                            </a>
                        </li>

                        <li>
                            <a href='#contact' onClick={() => setMenuOpen(false)}>
                                CONTACT
                            </a>
                        </li>
                        <li>
                            <a href='#hero' onClick={() => setMenuOpen(false)}>
                                <i className="fa-sharp fa-solid fa-house" />
                            </a>
                        </li>


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