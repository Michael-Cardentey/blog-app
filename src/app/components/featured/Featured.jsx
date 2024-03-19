import React from 'react'
import styles from "./featured.module.css"
import Image from "next/image"

const Featured = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}><b>Hey culture dev!</b> Discover my stories and created ideas</h1>
    <div className = {styles.post}>
    <div className={styles.imgContainer}>
<Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
    </div> 
    <div className={styles.textContainer}>
      <h1 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore expedita minima magni commodi ea soluta similique dolor rerum facilis fugit, illo nobis enim illum quae quas reprehenderit temporibus maxime.</h1>      
      <p className={styles.postDec}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex maxime hic porro nisi dicta libero totam perspiciatis est magni! Deleniti corporis veniam molestias in iusto pariatur fugit dolorum nisi!</p>
      <button className={styles.button}>Read More</button>
    </div>
    </div>
    </div>
  )
}

export default Featured