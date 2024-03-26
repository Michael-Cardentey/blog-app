import React from "react";
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment" className={styles.input}></textarea>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>03.24.2024</span>
                        </div>
                    </div>
                    <p children={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus harum illum, doloribus ad, dolorem quos dolorum nihil officia voluptates expedita enim laudantium quaerat quis, distinctio veniam nulla repellendus sed!</p>
                </div>
            </div>
        </div>
    )
}

export default Comments