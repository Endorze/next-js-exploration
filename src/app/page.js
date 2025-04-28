import Image from "next/image";
import styles from "./page.module.css";
import BatBoyImage from "../../public/batboy.jpg"
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className={styles.page}>
      Hello World its Alex!
      <Image src={BatBoyImage} alt="Image of Batboy" style={{ height: "auto", width: "100%" }} />
      <p>Here is an Image of a real cool person</p>
      <HeroImage imgUrl={"/spiderman.jpg"} />
      <div className="bgImage">
        <Image fill src={"/joker.jpg"}  alt="Image of svg" style={{objectFit: "cover", }}/>
      </div>
    </div>
  );
}
