'use client'

import style from '@/styles/components/common/mainview.module.scss'

export default function MainView() {
    return (
        <>
            <div className={style.mainViewWrap}>
                <figure>
                    <img src="/img/QuickWorkSample.png" alt="mainView" />
                </figure>
            </div>
        </>
    )
}