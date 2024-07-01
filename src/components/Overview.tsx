'use client'

import style from '@/styles/components/overview.module.scss'

export default function Overview() {
    return (
        <>
            <div className={style.overViewWrap}>
                <div className={style.overViewBox}>
                    <h2 className={style.overViewTitle}>
                        今の業務をギアチェンジ
                    </h2>
                </div>
                <div className={style.overViewBox}>
                    <p className={style.overViewText}>
                        業務中の無駄を、スピードで解決。<br />
                        一人あたりの作業効率を、スピードで解決。<br />
                        人員不足を、スピードで解決。
                    </p>
                    <p className={style.overViewText}>
                        新時代の歩行方法で新たな景色を実際に<br />
                        自分の足で体験してください。<br />
                        その体験が業務に生きる。<br />
                        今こそ業務のギアをチェンジするときです。
                    </p>
                    <p className={style.overViewText}>
                        そのスピードで鮮やかな働きを。
                    </p>
                    {/* <p>logo</p> */}
                </div>
            </div>
        </>
    )
}