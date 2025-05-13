import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  // Se puede desestructurar el event como { target }
  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const value = inputValue.trim();

    // Validar el input
    if( value.length <= 1 ) return;

    //setCategories( categories => [ inputValue, ...categories ]);
    onNewCategory( value );
    setInputValue('');
  }

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
