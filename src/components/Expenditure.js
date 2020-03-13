import React from 'react'

const Expenditure = ({expenditure}) => ( 
  <li className="gastos">
    <p>{expenditure.name}
    <span className="gasto">$ {expenditure.quantify}</span>
    </p>
  </li>
);
 
export default Expenditure;