import React from "react";
import styles from './BlogPost.module.css';

function BlogPost() {
    // console.log('BlogPost elements');

    return(
        <article className={styles.containerBlog}>
            <div className={styles.imagePost}>
                <img src="src\assets\photoBlog.webp" alt="Blog" />
            </div>

            <div className={styles.contentBlog}>
                <h2 className={styles.title}>Titolo del mio post</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla nisi magnam iste laudantium. Tempore totam repellat, dolorem, atque accusamus numquam tempora provident ipsam voluptatem laudantium earum itaque, nihil natus?
                Facere voluptates fuga, iste similique tempora neque, cumque expedita ut corrupti, beatae magnam dolore possimus. Reprehenderit sit nam saepe asperiores eum quia laudantium. Unde, ducimus dolor? Omnis iste quibusdam repellat.
                Tempora recusandae labore qui voluptatem quam tempore architecto omnis itaque a quasi, unde possimus consectetur vel laudantium fugiat ex assumenda quisquam facilis corrupti ab officiis delectus quaerat? Expedita, similique aperiam!
                </p>
                <button className={styles.button}>Leggi di più</button>
            </div>
        </article>
    )
}



export default BlogPost;