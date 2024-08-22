'use client'

import style from "@/styles/page.module.scss";

import Button from '@/components/template/Button'
import Header from '@/components/template/Header'
import ScrollEffect from "@/components/template/ScrollEffect";
import Footer from '@/components/template/Footer'

export default function Home() {
  return (
    <>
      <div className={style.quickWorkWrap}>
        <Header />
        <ScrollEffect />
        <Footer />
      </div>
    </>
  );
}
