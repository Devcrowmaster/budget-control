import React, { useState } from 'react'
import Error from './Error';

const Form = () => {

  const [name,saveName] = useState('');

  const [quantify,saveQuantify] = useState(0);

  const [error,saveError] = useState(false);

  //Cuando se Agrega un Gasto
  const addExpenditure = e =>{
    e.preventDefault();

    //validar
    if(quantify < 1 || isNaN(quantify) || name.trim() === ''){
      saveError(true);
      return;
    }
    saveError(false);
    //construir el gasto
    

    //pasar el gasto al componente principal

    //resetear el form
  }

  return ( 
    <form
      onSubmit={addExpenditure}
    >
      <h2>Agregar tus gastos aqui</h2>
      { error ?  <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }
      <div className="campo">
        <label htmlFor="name">Nombre Gasto</label>
        <input
          id="name"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={name}
          onChange={e => saveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="quantify">Cantidad Gasto</label>
        <input
          id="quantify"
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={quantify}
          onChange={e => saveQuantify(parseInt(e.target.value,10))}
        />
      </div>
      <input 
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
   );
}
 
export default Form;