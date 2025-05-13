import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes(newCategory) ) return;

    // Agrega al final
    // setCategories( cat => [ ...cat, 'Naruto' ] );
    
    //Agrega al principio
    setCategories( cat => [ newCategory, ...cat ] );

  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* <AddCategory setCategories={ setCategories } /> */}
        <AddCategory onNewCategory={ value => onAddCategory(value) } />

        {/* Listado de Gif */}
        { categories.map( (category) => (
              <GifGrid key={ category } category={ category }/>
            )
          )
        }
    </>
  )
}
