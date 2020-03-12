import React, { useState } from 'react'

const Form = () => {
  return ( 
    <form>
      <h2>Agregar tus gastos aqui</h2>

      <div className="campo">
        <label htmlFor="name">Nombre Gasto</label>
        <input
          id="name"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label htmlFor="quantify">Cantidad Gasto</label>
        <input
          id="quantify"
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
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