import React from 'react';
import PropTypes from 'prop-types';

const Expenditure = ({expenditure}) => ( 
  <li className="gastos">
    <p>{expenditure.name}
    <span className="gasto">$ {expenditure.quantify}</span>
    </p>
  </li>
);

Expenditure.propTypes = {
  expenditure : PropTypes.object.isRequired
}
export default Expenditure;