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
                    <video controls width="1048">
                        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}