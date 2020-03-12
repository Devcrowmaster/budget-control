import React,{Fragment,useState} from 'react';
import Error from './Error';

const Question = ({saveBudget,saveRemaining}) => {

  //Definir el State
  const [quantify,saveQuantify] = useState(0);

  const [error, saveError] = useState(false);

  //Function que lee el presupuesto
  const defineBudget = e => {
    // console.log(e.target.value); //Return String
    // console.log(parseInt(e.target.value)); //Convierte a numero

    saveQuantify(parseInt(e.target.value,10));
  }

  //Submit
  const addBudget = e =>{
    e.preventDefault();

    //Validar
    if(quantify < 1 || isNaN(quantify)){
      saveError(true);
      return;
    }


    //Si pasa la validacion
    saveError(false);

    saveBudget(quantify);
    saveRemaining(quantify);


  }


  return ( 
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ?  <Error message="El  presupuesto es incorrecto"></Error> : null}

      <form
        onSubmit={addBudget}
      >
        <input 
        type="number" 
        className="u-full-width"
        placeholder="Coloca tu presupuesto"
        onChange={defineBudget}
        />
      <input 
        type="submit"
        className="button-primary u-full-width"
        value="Definir Presupuesto"
      />
      </form>
    </Fragment>
  );
}

export default Question;