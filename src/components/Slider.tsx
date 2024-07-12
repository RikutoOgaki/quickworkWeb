'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/components/slider.module.scss'


// 画像データの型
type ImgData = Array<Img>

type Img = {
    id: number,
    img: string
}

// ButtonComponent用Props
type Button = {
    onClick?: () => void,
    text: string
}

export default function Slider() {

    // slider用のButtonComponent
    const SliderButton = (props: Button) => {
        return (
            <div
                className={style.buttonStyle}
                onClick={props.onClick}
            >
                {props.text}
            </div>
        )
    }

    // 表示するようの画像（ダミーデータ）
    const [imgData, setImgData] = useState<ImgData>([

    ])


    return (
        <>
            <div className={style.sliderWrap}>
                <h3 className={style.sliderTitle}>
                    <ruby>鮮やかに彩り
                        <rp>(</rp><rt>Design</rt><rp>)</rp>
                    </ruby>
                </h3>
                <div className={style.sliderBox}>
                    <SliderButton text='<' />
                    <div className={style.sliderImgBox}>
                        <figure>
                            <img src="/img/QuickWorkSample.png" alt="対応する画像" />
                        </figure>
                    </div>
                    <SliderButton text='>' />
                </div>
            </div>
        </>
    )
}