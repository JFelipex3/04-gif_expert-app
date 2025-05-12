import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( category ) => {

    // Agrega al final
    // setCategories( cat => [ ...cat, 'Naruto' ] );
    
    //Agrega al principio
    setCategories( cat => [ category, ...cat ] );

  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory setCategories={ setCategories } />

        {/* Listado de Gif */}
        <ol>
          { categories.map( category => {
            return ( <li key={ category }>{ category }</li> )
          })}
        </ol>
    </>
  )
}
