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
            </header>
        </>
    )
}