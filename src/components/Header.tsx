'use client'

import style from '@/styles/components/header.module.scss'

export default function Header() {

    return (
        <>
            <header className={style.headerWrap}>
                <figure>
                    <img src="img/ECCCompDesignLogoType.svg" alt="" />
                </figure>
            </header>
        </>
    )
}