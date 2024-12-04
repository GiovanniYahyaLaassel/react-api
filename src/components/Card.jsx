import React from "react";
import styles from "./Card.module.css";

// Destrutturo i props e li faccio accettare da card
function Card({title, content, image, tags}) {
    // console.log('title component:', title);
    // console.log('tags array:', tags);

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>

                {/* se un immagine e vuota oppire undefined allora uso quella di defualt */}

                <img src={image ? image :"https://placehold.co/600x400"} alt={title} />
            </div>
            <h2>{title}</h2>
            {/* mappo per creare un span per ognuno */}
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (

                    <span 
                        key={index} 
                        className={styles.tag}
                        style={{backgroundColor: getTagColor(tag)}} 
                    >

                        {tag}
                    </span>
                ))}
            </div>

            <p>{content}</p>
        </article>
    )
}

//uso uuna funzione per creare i colori in maniera dinamica 
function getTagColor(tag) {
    switch (tag) {
        case 'html':
            return '#4CAF50';
        case 'css':
            return '#E91E63';
        case 'js':
            return '#FFC107';
        case 'php':
            return '#6D4C41';
        default:
            return '#9E9E9E';
    }
};

export default Card;