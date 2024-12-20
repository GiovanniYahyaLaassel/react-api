import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/header";
import styles from "./App.module.css";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import AddPostForm from "./components/AddPostForm";
import Card from "./components/Card";
import { posts as initialPosts } from "./components/Data/posts (1)";


function App() {
  // console.log('Pubblished posts:', pubblishedPosts);
  
  const [posts, setPosts] = useState([]); // stato per gestire l'array dei post
  
  // funzione per aggiungere un nuovo posts
  const addNewPost = (formData)  => {

    const newPost = {
      id: posts.length + 1, // Genero un ID  unico chw si basa sulla lunghezza dell'array 
      title: formData.title,
      content: formData.content, 
      image: formData.image || "https://placehold.co/600x400", 
      category: formData.category,
      tags: formData.tags, 
      published: true, 
    };

    setPosts([...posts, newPost]);
    
  };

  useEffect(() => {
    // funzione per ottenere i dati dal backend 
    const fetchPosts = async () => {
      try {
        // effetuo la richiesta get per ottenere i post
        const response = await axios.get('http://localhost:3000/posts');
        // aggiorno lo stato
        setPosts(response.data.posts);
        console.log('Posts recuperati:', response.data.posts);

      } catch (error) {
        console.error('Errore nel recuperare i post:', error); // Gestisco l'errore in caso di problemi
      }
    };

      // chiamo la funzione 
      fetchPosts(); 

  }, []);

  const pubblishedPosts = posts.filter((post) => post.published); // filtro i post pubblicati
  const uniqueTags = getUniqueTags(posts)  //oottengo i tag distinti

  return (
    <>
    <div>
      <Header/>

      <AddPostForm addNewPost={addNewPost} />

      <section className={styles.tagSection}>
        <h3>Lista dei Tag</h3>
        <div className={styles.tagList}>
          {uniqueTags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>  
      </section>   
      

      <div className={styles.cardsContainer}>
         {/* genero le card */}
          {pubblishedPosts.map((post) => (
            <Card 

              key={post.id} 
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags} 
            />
          ))}
      </div>
      <Footer/>

    </div>
    </>
  )
}

// creo una funzione così ottengo i tag distinti
function getUniqueTags(posts) {
    const allTags = posts.flatMap((post) => post.tags); // creo un unico array
    const uniqueTags = [...new Set(allTags)]; // rimuovo i duplicati
    return uniqueTags;
}
export default App
