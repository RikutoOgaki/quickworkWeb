'use client'

import style from "@/styles/page.module.scss";

import Button from '@/components/template/Button'
import Header from '@/components/template/Header'
import ScrollEffect from "@/components/template/ScrollEffect";
import MainView from '@/components/common/MainView'
import Overview from "@/components/common/Overview";
import MovieContent from "@/components/common/MovieContent";
import Performance from "@/components/common/Performance";
import Slider from "@/components/common/Slider";

export default function Home() {
  return (
    <>
      <div className={style.quickWorkWrap}>
        <Header />
        <MainView />
        {/* <Button text="詳しく見る" /> */}
        <ScrollEffect />
        <Overview />
        <MovieContent />
        <Performance />
        <Slider />
      </div>
    </>
  );
}
