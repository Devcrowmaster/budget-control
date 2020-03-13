import React,{useState,useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
  //Definir state
  const [ budget,saveBudget] = useState(0);

  const [remaining,saveRemaining] = useState(0);

  const [showQuestion, updateQuestion] = useState(true);

  const [expenditures,saveExpenditures] = useState([]);

  const [expenditure , saveExpenditure] = useState({});

  //UseEffect que actualiza el restante
  useEffect(()=>{
    saveExpenditures([
      ...expenditures,
      expenditure
    ])

  }, [expenditure]);

  //Cuando agregamos un nuevo gasto

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal">
            {showQuestion ? (
              <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    saveExpenditure={saveExpenditure}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenditures={expenditures}
                  />
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  />

                </div>
              </div>
            )}
            
            
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
