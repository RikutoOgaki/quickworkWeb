'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/components/template/scrolleffect.module.scss'

export default function ScrollEffect() {
    return (
        <>
            <div className={style.scrollEffectWrap}>
                <div className={style.scrollBar}>
                    <span className={style.scrollIcon}></span>
                </div>
                <p className={style.text}>scroll</p>
            </div>
        </>
    )
}