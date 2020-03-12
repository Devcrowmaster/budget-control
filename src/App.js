import React,{useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  //Definir state
  const [ budget,saveBudget] = useState(0);

  const [remaining,saveRemaining] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal">
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
            >
            </Question>
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
