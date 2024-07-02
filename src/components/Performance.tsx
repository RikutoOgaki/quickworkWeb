'use client'

import style from '@/styles/components/performance.module.scss'
import { useState, useEffect } from 'react'

export default function Performance() {

    const [items, setItems] = useState([
        {
            id: 1,
            img: '',
            text: 'モーターによる移動速度の上昇'
        },
        {
            id: 2,
            img: '',
            text: 'GPSによる位置情報の取得'
        },
        {
            id: 3,
            img: '',
            text: 'Bluetoothでアプリと簡単接続'
        },
    ])

    return (
        <>
            <div className={style.performanceWrap}>
                <h3 className={style.performanceTitle}>
                    <ruby>そのスピードで
                        <rp>(</rp><rt>Utility</rt><rp>)</rp>
                    </ruby>
                </h3>
                <div className={style.performanceContents}>
                    {items.map((v, idx) =>
                        <div key={idx} style={v.id === 2 ? { alignItems: 'left' } : { alignItems: 'right' }}>
                            <p className={style.performanceText}>{v.text}</p>
                            <div className={style.imgBox}>
                                <figure>
                                    <img src={v.img} alt="対応する画像" />
                                </figure>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}