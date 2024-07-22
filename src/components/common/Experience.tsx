'use client'

import style from '@/styles/components/common/experience.module.scss'
import Button from '@/components/template/Button'

export default function Experience() {
    return (
        <>
            <div className={style.experienceWrap}>
                <h3 className={style.performanceTitle}>
                    <ruby>体験しよう
                        <rp>(</rp><rt>RentQuickwork</rt><rp>)</rp>
                    </ruby>
                </h3>
                <div className={style.experienceContents}>
                    <h4>QuickWork</h4>
                    <p>
                        大型商業施設向けの移動速度を
                        向上させることができるシステムです。
                        あなたの会社の仕事効率をスピードで
                        向上させることができます。

                        「Quick work」で新たなスピードを！
                    </p>
                    <Button text='レンタルする' />
                </div>
            </div>
        </>
    )
}