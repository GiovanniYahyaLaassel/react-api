import React, {useState} from "react";

function AddPostForm({ addNewPost }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        category: "",    
        tags: [], 
    });  //stato per tutti i campi del form , come uno oggetto vuoto 

    //funzione per gestire il cambiamento dell'input
    const handleInputChange = (event) => {
       const {name, value} = event.target; 
        setFormData ({
            ...formData, //copio l'oggetto esistente 
            [name]: value, // aggiorno il campo modificato
        });
    };

        // funzione per gestire le checkbox  
    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;

        setFormData((prevFormData) => {
            if(checked) {
                    // se la checkbox e selezionata , aggiungo il tag all'array
           return {
            ...prevFormData,
            tags: [...prevFormData.tags, name ],
           };  
        } else { 
            
            // se la checkbox è deselezionata , rimuovo il tag 
            return{
                ...prevFormData,
                tags: prevFormData.tags.filter((tag) => tag !== name ),
            };
        } 
           
        });

    };


    // funzione per gestire il submit form
    const  handleSubmit = (event) => {
        // evito il refresh
        event.preventDefault();

        if (formData.title.trim() !== "") { // rimuovo gli spazi bianchi nella stringa 
            addNewPost(formData); //passo l'intero oggetto
            setFormData({title: "", image: "", content: "", category: "", tags:[]}); // resetto  tutti i campi
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Inserisci il titolo del nuovo posts "
            />

            <input 
            type="text"
            name="image"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Inserisci il link dell'immagine"
            />

            <textarea 
            name="content"
            value={formData.content }
            onChange={handleInputChange}
            placeholder="Inserisci il contenuto del post"
            />

            <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            >
            
            <option value="" disabled>
                Seleziona una categoria
            </option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="node">Node.js</option>

            </select>
            <fieldset>
                <legend>Seleziona i Tag:</legend>
                <label>
                    <input 
                        type="checkbox" 
                        name="html"
                        checked={formData.tags.includes('html')}
                        onChange={handleCheckboxChange}
                    />
                    HTML
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="css"
                        checked={formData.tags.includes('css')}
                        onChange={handleCheckboxChange}
                    />
                    CSS
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="javascript"
                        checked={formData.tags.includes('javascript')}
                        onChange={handleCheckboxChange}
                    />
                    Javascript
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="react"
                        checked={formData.tags.includes('react')}
                        onChange={handleCheckboxChange}
                    />
                    React
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="node"
                        checked={formData.tags.includes('node')}
                        onChange={handleCheckboxChange}
                    />
                    Node.js
                </label>
                
            </fieldset>
            <button type="submit">Aggiungi Post</button>
        </form>
    );
}

export default AddPostForm;
