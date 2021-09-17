import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  //function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");// this schedues the update of the title variable but doesn't update it yet. it's updated in the return statement in the jsx code and thats why console log in the next time will output the older value
    console.log(title);
  };

   return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
