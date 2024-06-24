import Image from "next/image";
import styles from "@/styles/page.module.scss";

import Button from '@/components/Button'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Button text="詳しく見る" />
      </div>
    </>
  );
}
