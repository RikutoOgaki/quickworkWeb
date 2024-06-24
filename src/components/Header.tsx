'use client'

import { useState, useEffect } from 'react'

import style from '@/styles/components/header.module.scss'

export default function Header() {

    const [menuFlg, setMenuFlg] = useState<boolean>(false)

    return (
        <>
            <header className={style.headerWrap}>
                <figure>
                    <img src="/img/quickwork.svg" alt="ロゴ" />
                </figure>
                <div
                    className={style.hubergerMenu}
                    onClick={() => setMenuFlg(!menuFlg)}
                >
                    <span className={!menuFlg ? style.menuLineTop : style.menuLineTopAfter}></span>
                    <span className={!menuFlg ? style.menuLineBottom : style.menuLineBottomAfter}></span>
                </div>
                <div className={!menuFlg ? style.backColor : style.backColorAfter}></div>
                <nav className={!menuFlg ? style.menuArea : style.menuAreaAfter}>
                    <ul className={style.menuList}>
                        <li className={style.menulistItem}>
                            <ruby>新たな景色を
                                <rp>(</rp><rt>Use scene</rt><rp>)</rp>
                            </ruby>
                        </li>
                        <li className={style.menulistItem}>
                            <ruby>そのスピードで
                                <rp>(</rp><rt>Utility</rt><rp>)</rp>
                            </ruby>
                        </li>
                        <li className={style.menulistItem}>
                            <ruby>鮮やかに彩り
                                <rp>(</rp><rt>Design</rt><rp>)</rp>
                            </ruby>
                        </li>
                        <li className={style.menulistItem}>
                            <ruby>あなたの職場へ
                                <rp>(</rp><rt>Rent Quick work</rt><rp>)</rp>
                            </ruby>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}