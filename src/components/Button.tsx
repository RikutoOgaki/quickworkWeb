'use client'

type Props = {
    text: string,
    link?: string,
    className?: string | undefined
}

import { useState, useEffect } from 'react'
import style from '@/styles/components/button.module.scss'

export default function Button(props: Props) {

    const [buttonState, setButtonState] = useState({
        text: props.text,
        link: props.link,
        className: props.className
    })

    useEffect(() => {
        setButtonState({
            text: props.text,
            link: props.link,
            className: props.className
        })
    }, [props])

    return (
        <>
            <button
                className={buttonState.className !== undefined ? buttonState.className : style.buttonStyle}
                onClick={() => {
                    if (buttonState.link !== undefined) {
                        location.href = buttonState.link
                    }
                    else {
                        return null
                    }
                }
                }
            >
                {buttonState.text}
            </button>
        </>
    )
}