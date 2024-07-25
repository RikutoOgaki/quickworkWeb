'use client'

import style from '@/styles/components/common/moivecontent.module.scss'

export default function MovieContent() {
    return (
        <>
            <div className={style.movieContentWrap}>
                <h3 className={style.movieContentTitle}>
                    <ruby>新たな景色を
                        <rp>(</rp><rt>Use scene</rt><rp>)</rp>
                    </ruby>
                </h3>
                <div className={style.movieContentBox}>
                    <video width="1048">
                        <source src="/" type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}