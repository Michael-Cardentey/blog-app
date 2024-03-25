import styles from "./card.module.css"
import Link from "next/link"
import Image from "next/image"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt="" fill className={styles.image}></Image>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>-3.19.2024</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium est voluptates illum odio dolore iste deserunt labore sunt, nihil asperiores ea maiores voluptatum possimus nulla iusto cupiditate eligendi totam nobis?</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum, pariatur ab nemo ipsam facere, amet rem itaque esse maxime accusamus temporibus quam placeat, enim cumque facilis totam doloremque iure?</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
export default Card