import React,{Fragment,useState} from 'react';

const Question = () => {

  //Definir el State
  const [quantify,saveQuantify] = useState(0);

  //Function que lee el presupuesto
  const defineBudget = e => {
    // console.log(e.target.value); //Return String
    // console.log(parseInt(e.target.value)); //Convierte a numero

    saveQuantify(parseInt(e.target.value,10));
  }

  return ( 
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      <form>
        <input 
        type="number" 
        className="u-full-width"
        placeholder="Coloca tu presupuesto"
        onChange={e => saveQuantify(parseInt(e.target.value,10))}
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