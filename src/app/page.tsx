'use client'

import style from "@/styles/page.module.scss";

import Button from '@/components/Button'
import Header from '@/components/Header'
import ScrollEffect from "@/components/ScrollEffect";
import MainView from '@/components/MainView'

export default function Home() {
  return (
    <>
      <div className={style.quickWorkWrap}>
        <Header />
        <MainView />
        {/* <Button text="詳しく見る" /> */}
        <ScrollEffect />
      </div>
    </>
  );
}
